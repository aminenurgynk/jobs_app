import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, ScreenHeaderBtn, Popularjobs, Welcome } from '../components';


const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex:1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },

            }}/>
        </SafeAreaView>
    )
}

export default Home;