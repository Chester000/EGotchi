import { Button, Image, StyleSheet, Text, View } from 'react-native';

const faces = [
    { uri: 'http://citweb.lethbridgecollege.ab.ca/MobileApp/mad-face.png' },
    { uri: 'http://citweb.lethbridgecollege.ab.ca/MobileApp/sad-face.png' },
    { uri: 'http://citweb.lethbridgecollege.ab.ca/MobileApp/meh-face.png' },
    { uri: 'http://citweb.lethbridgecollege.ab.ca/MobileApp/okay-face.png' },
    { uri: 'http://citweb.lethbridgecollege.ab.ca/MobileApp/happy-face.png' },
]

export default function Face(props) {
    return (
        <View>
            <Image 
                style={{ height:200, width: 200, resizeMode: 'center' }}
                source={faces[props.whichFace]} />
        </View>
    )
}