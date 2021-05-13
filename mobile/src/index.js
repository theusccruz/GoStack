import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";

import api from "./services/api";

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {            
            setProjects(response.data);
        })

    }, []);

    const addProject = async () => {
        const response = await api.post('projects', {
            title: `Feito no RN ${Date.now()}`,
            owner: 'Matheus Cruz'
        });
        setProjects([...projects, response.data]);
    }

    return (
        <>
            <StatusBar
                barStyle='light-content'
                backgroundColor='#7159c1'
            />

            <SafeAreaView style={styles.container}>
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text
                            style={styles.project}
                        >
                            {project.title}
                        </Text>
                    )}
                />
                <TouchableOpacity 
                    activeOpacity={0.6} 
                    style={styles.button}
                    onPress={addProject}
                >
                    <Text style={styles.buttonText}>Button</Text>
                </TouchableOpacity>
            </SafeAreaView>

            {/* Usando View
                <View style={styles.container}>            
                {projects.map(project => {
                    return (
                        <Text 
                            style={styles.project} 
                            key={project.id}
                        >
                            {project.title}
                        </Text>
                    );
                })}            
            </View>  
            */}
        </>
    );
}

const styles = StyleSheet.create({
    container: { // equivalente a classe do css
        backgroundColor: '#7159c1',
        flex: 1, // todos componentes RN tem display flex
        alignItems: 'center',
        padding: 10,
    },
    project: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#21A179',  
        margin: 20,
        height: 50,
        width: 150,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 18,
    }
});