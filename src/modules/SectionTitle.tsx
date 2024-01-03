import React from "react";
import { Text, View } from "@react-pdf/renderer";

const SectionTitle = (props: any) => <View style={{
  display: 'flex',
  flexDirection: 'row',
}}>
  <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{props.children}</Text>
  <View style={{ flexGrow: 1 }}>
    <View style={{
      marginTop: 11,
      marginLeft: 15,
      height: 1,
      backgroundColor: '#bbb',
    }}></View>
  </View>
</View>;

export default SectionTitle;
