import React from "react";
import { Text, View } from "@react-pdf/renderer";

function StudentInfo(props: any) {
  const {
    institute,
    consultation,
    dt,
  } = props;

  return <React.Fragment>
    <View style={{ display: "flex", flexDirection: "row", fontSize: 10.5 }}>
      <Text style={{ width: 110.5, padding: 7.5, backgroundColor: "rgb(231, 236, 246)", color: "rgb(51, 69, 146)", textAlign: "center", fontWeight: 'bold' }}>학교</Text>
      <View style={{ width: 3.75 }} />
      <Text style={{ width: 163.5, padding: 7.5, backgroundColor: "rgb(239, 239, 239)", textAlign: "center" }}>{institute.name.length > 12 ? `${institute.name.slice(0, 12)} ...` : institute.name}</Text>
      <View style={{ width: 3.75 }} />
      <Text style={{ width: 110.5, padding: 7.5, backgroundColor: "rgb(231, 236, 246)", color: "rgb(51, 69, 146)", textAlign: "center", fontWeight: 'bold' }}>학년</Text>
      <View style={{ width: 3.75 }} />
      <Text style={{ width: 163.5, padding: 7.5, backgroundColor: "rgb(239, 239, 239)", textAlign: "center" }}>{consultation.student.schoolGrade}학년</Text>
    </View>
    <View style={{ height: 4 }} />

    <View style={{ display: "flex", flexDirection: "row", fontSize: 10.5 }}>
      <Text style={{ width: 110.5, padding: 7.5, backgroundColor: "rgb(231, 236, 246)", color: "rgb(51, 69, 146)", textAlign: "center", fontWeight: 'bold' }}>반</Text>
      <View style={{ width: 3.75 }} />
      <Text style={{ width: 163.5, padding: 7.5, backgroundColor: "rgb(239, 239, 239)", textAlign: "center" }}>{consultation.student.schoolClass}반</Text>
      <View style={{ width: 3.75 }} />
      <Text style={{ width: 110.5, padding: 7.5, backgroundColor: "rgb(231, 236, 246)", color: "rgb(51, 69, 146)", textAlign: "center", fontWeight: 'bold' }}>번호</Text>
      <View style={{ width: 3.75 }} />
      <Text style={{ width: 163.5, padding: 7.5, backgroundColor: "rgb(239, 239, 239)", textAlign: "center" }}>{consultation.student.schoolClassNum}번</Text>
    </View>
    <View style={{ height: 4 }} />

    <View style={{ display: "flex", flexDirection: "row", fontSize: 10.5 }}>
      <Text style={{ width: 110.5, padding: 7.5, backgroundColor: "rgb(231, 236, 246)", color: "rgb(51, 69, 146)", textAlign: "center", fontWeight: 'bold' }}>이름</Text>
      <View style={{ width: 3.75 }} />
      <Text style={{ width: 163.5, padding: 7.5, backgroundColor: "rgb(239, 239, 239)", textAlign: "center" }}>{consultation.student.name}</Text>
      <View style={{ width: 3.75 }} />
      <Text style={{ width: 110.5, padding: 7.5, backgroundColor: "rgb(231, 236, 246)", color: "rgb(51, 69, 146)", textAlign: "center", fontWeight: 'bold' }}>작성일</Text>
      <View style={{ width: 3.75 }} />
      <Text style={{ width: 163.5, padding: 7.5, backgroundColor: "rgb(239, 239, 239)", textAlign: "center" }}>{dt}</Text>
    </View>
  </React.Fragment>;
}

export default StudentInfo;
