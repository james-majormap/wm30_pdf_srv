import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  Image,
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

  return <Document title={`${consultation.student.name} 님의 대학 및 학과 탐색 보고서`}>
    <Page size="A4" style={{
      padding: 30,
      fontFamily: "Pretendard",
      fontSize: 9,
    }}>
      <SectionTitle>대학 및 학과 탐색 보고서</SectionTitle>
      <View style={{ height: 15 }} />

      <Text style={{ fontSize: 12 }}>검사의 결과를 바탕으로 한국에 있는 160개 4년제 대학교와 7,000여 개의 학과 정보를 탐색하며 진학하고자 하는 학과를 탐색할 수 있습니다. 특별히 목표로 하고 있는 계열이나 학과가 있으면 해당 조건의 대학교를 확인할 수도 있습니다. 대학마다 학과별 연관지도 제공하고 있어 전략적인 입시준비를 할 수 있습니다.</Text>
      <View style={{ height: 15 }} />

      <StudentInfo
        consultation={consultation}
        institute={institute}
        dt={dt}
      />
      <View style={{ height: 15 }} />

      <Card style={{ padding: "7.5px 15px" }}>
        <View style={{ fontSize: 10.5, display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: 'bold' }}>{consultation.student.name}</Text>
          <Text> 님이 탐색한 대학 및 학과는 </Text>
          <Image style={{ width: 22.5, height: 22.5 }} src={`https://storage.googleapis.com/university-emblems/png/${encodeURI(report.univName.split("(")[0])}.png`} />
          <Text style={{ fontWeight: 'bold' }}> {report.univName}</Text>
          <Text style={{ fontWeight: 500, color: "rgb(48, 113, 242)" }}> {report.majorName}</Text>
          <Text> 입니다.</Text>
        </View>
      </Card>
      <View style={{ height: 15 }} />

      <Card style={{ borderTop: '1px soild rgb(48, 113, 242)' }}>
        <Text style={{ fontSize: 10.5, fontWeight: 'bold' }}>나의 키워드</Text>
      </Card>
      <Card style={{ borderTop: 0 }}>
        <Text style={{ fontSize: 12.75 }}>{report.keywords}</Text>
      </Card>
      <View style={{ height: 15 }} />

      <Card style={{ borderTop: '1px soild rgb(48, 113, 242)' }}>
        <Text style={{ fontSize: 10.5, fontWeight: 'bold' }}>선택교과</Text>
      </Card>
      <Card style={{ borderTop: 0 }}>
        <Text style={{ fontSize: 12.75 }}>{report.schoolSubjects}</Text>
      </Card>
      <View style={{ height: 15 }} />

      <Card style={{ borderTop: '1px soild rgb(48, 113, 242)' }}>
        <Text style={{ fontSize: 10.5, fontWeight: 'bold' }}>추천도서</Text>
      </Card>
      <Card style={{ borderTop: 0 }}>
        <Text style={{ fontSize: 12.75 }}>{report.books}</Text>
      </Card>
      <View style={{ height: 15 }} />

      <Card style={{ borderTop: '1px soild rgb(48, 113, 242)' }}>
        <Text style={{ fontSize: 10.5, fontWeight: 'bold' }}>관련직업</Text>
      </Card>
      <Card style={{ borderTop: 0 }}>
        <Text style={{ fontSize: 12.75 }}>{report.jobs}</Text>
      </Card>
      <View style={{ height: 15 }} />

      <Card style={{ borderTop: '1px soild rgb(48, 113, 242)' }}>
        <Text style={{ fontSize: 10.5, fontWeight: 'bold' }}>대학교에서 배우는 내용</Text>
      </Card>
      <Card style={{ borderTop: 0 }}>
        <Text style={{ fontSize: 12.75 }}>{report.mainSubjects}</Text>
      </Card>
    </Page>
  </Document>;
}

export default Printable;
