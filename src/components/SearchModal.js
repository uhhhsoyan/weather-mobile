import React, { useState, useEffect, cloneElement } from 'react';
import { View, Text, TextInput, Modal, TouchableHighlight, TouchableWithoutFeedback, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons'; 

const SearchModal = ({ showSearch, setShowSearch, updateLocation }) => {
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState(null);
    
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://www.metaweather.com/api/location/search', {
                params: {
                    query: debouncedTerm
                }
            })
            setResults(data);
        };
        debouncedTerm === '' ? setResults(null) : search()
    }, [debouncedTerm])

    const closeModal = () => {
        setTerm('');
        setDebouncedTerm('');
        setResults(null);
        setShowSearch(!showSearch);
    }

    const onSubmit = (result) => {
        closeModal()
        updateLocation(result)
    }
    
    const renderResults = (results) => {
        if (!results) {
            return null;
        } else {
            return results.map(result => {
                return (
                    <TouchableWithoutFeedback key={result.woeid} onPress={() => onSubmit(result)}>
                        <Text style={styles.searchListItem}>{result.title}</Text>
                    </TouchableWithoutFeedback>    
                )
            })
        }
    }
    
    return (
        <Modal
            animationType='slide'
            visible={showSearch}
            presentationStyle='fullscreen'
        >
            <View style={styles.searchContainer}>
                <TouchableWithoutFeedback onPress={closeModal}>
                    <AntDesign name="close" size={24} color="white" style={{ marginLeft: 'auto' }}/>
                </TouchableWithoutFeedback>
                <Text style={{ color: '#fff', fontSize: 20 }}>Search for a location</Text>
                <View style={styles.searchBar}>
                    <AntDesign name="search1" style={styles.searchIcon}/>
                    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
                        <TextInput
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.searchInput}
                        placeholder="search location"
                        value={term}
                        onChangeText={text => setTerm(text)}
                        onEndEditing={() => null}
                        />
                    </TouchableWithoutFeedback>
                    
                </View>
                <ScrollView>
                    {renderResults(results)} 
                </ScrollView>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#1e213a',
        padding: 20,
        paddingTop: 80,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 60,
        borderColor: '#e7e7eb',
        borderWidth: 1,
        color: 'white',
        marginTop: 5
    },
    searchIcon: {
        fontSize: 24,
        margin: 15,
        color: '#616475',
    },
    searchInput: {
        fontSize: 24,
        color: '#fff'
    },
    searchListItem: {
        borderColor: '#616475',
        borderWidth: 0.5,
        color: '#e7e7eb',
        fontSize: 20,
        padding: 15,
        marginTop: 5,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 30,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
});

export default SearchModal;