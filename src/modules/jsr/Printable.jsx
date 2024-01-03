import React from "react";
import {
  Document,
  Page,
  View,
  Text,
} from "@react-pdf/renderer";

import Card from "../Card";
import SectionTitle from "../SectionTitle";
import StudentInfo from "../StudentInfo";

function Printable(props) {
  const {
    institute,
    consultation,
    dt,
    report,
  } = props;

  return <Document title={`${consultation.student.name} 님의 직업 탐색 보고서`}>
    <Page size="A4" style={{
      padding: 30,
      fontFamily: "Pretendard",
      fontSize: 9,
    }}>
      <SectionTitle>직업 탐색 보고서</SectionTitle>
      <View style={{ height: 15 }} />

      <Text style={{ fontSize: 12 }}>검사 결과를 바탕으로 자신이 원하는 직업과 직업별로 필요한 것들을 탐색할 수 있습니다. 탐색 데이터는 한국의 790개 직업정보로 구성되어 있으며 목표로 하는 직업을 갖기 위해서 준비해야 하는 것과 전망, 연봉 수준 등을 사전에 파악할 수 있어 미래에 맞는 직업을 준비할 수 있습니다.</Text>
      <View style={{ height: 15 }} />

      <StudentInfo
        consultation={consultation}
        institute={institute}
        dt={dt}
      />
      <View style={{ height: 15 }} />

      <Card>
        <View style={{ fontSize: 10.5, display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold" }}>{consultation.student.name}</Text>
          <Text> 님이 탐색한 직업은</Text>
          <Text style={{ fontWeight: "bold", color: "rgb(48, 113, 242)" }}> {report.jobName}</Text>
          <Text> 입니다.</Text>
        </View>
      </Card>
      <View style={{ height: 15 }} />

      <Card style={{ borderTop: '1px soild rgb(48, 113, 242)' }}>
        <Text style={{ fontSize: 10.5, fontWeight: 'bold' }}>하는 일</Text>
      </Card>
      <Card style={{ borderTop: 0 }}>
        <Text style={{ fontSize: 12.75 }}>{report.workIntroduction}</Text>
      </Card>
      <View style={{ height: 15 }} />

      <Card style={{ borderTop: '1px soild rgb(48, 113, 242)' }}>
        <Text style={{ fontSize: 10.5, fontWeight: 'bold' }}>필요한 능력</Text>
      </Card>
      <Card style={{ borderTop: 0 }}>
        <Text style={{ fontSize: 12.75 }}>{report.abilities}</Text>
      </Card>
      <View style={{ height: 15 }} />

      <Card style={{ borderTop: '1px soild rgb(48, 113, 242)' }}>
        <Text style={{ fontSize: 10.5, fontWeight: 'bold' }}>필요한 지식</Text>
      </Card>
      <Card style={{ borderTop: 0 }}>
        <Text style={{ fontSize: 12.75 }}>{report.essentialTechnology}</Text>
      </Card>
      <View style={{ height: 15 }} />

      <Card style={{ borderTop: '1px soild rgb(48, 113, 242)' }}>
        <Text style={{ fontSize: 10.5, fontWeight: 'bold' }}>관련전공</Text>
      </Card>
      <Card style={{ borderTop: 0 }}>
        <Text style={{ fontSize: 12.75 }}>{report.relatedMajors}</Text>
      </Card>
      <View style={{ height: 15 }} />

      <Card style={{ borderTop: '1px soild rgb(48, 113, 242)' }}>
        <Text style={{ fontSize: 10.5, fontWeight: 'bold' }}>이 직업에 대한 나의 생각</Text>
      </Card>
      <Card style={{ borderTop: 0 }}>
        <Text style={{ fontSize: 12.75 }}>{report.comment}</Text>
      </Card>
    </Page>
  </Document>;
}

export default Printable;
