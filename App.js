import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native';
import {View} from "react-native-web";
import {Text} from "react-native-svg";


    const App = () => {
        const [measurement, getMeasurement] = useState( {temp: Math.random()/3 , Hum: Math.random()*2 , temp2: Math.random() , timestamp: Date.now()});

        //ComponentDidUpdate

        return (
            <view>
                <Text>Temp:</Text>
                <Text>{measurement.temp}</Text>
                <Text>{'\n'}</Text>
                <Text>Hum:</Text>
                <Text>{measurement.Hum}</Text>
                <Text>Temp2:</Text>
                <Text>{measurement.temp2}</Text>
                <Text>date:</Text>
                <Text>{measurement.timestamp}</Text>
            </view>

        );
    };

    export default App;