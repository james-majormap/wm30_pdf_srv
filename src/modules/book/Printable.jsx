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

const Subtitlte1 = ({ children }) => <Text style={{ fontSize: 12.75, fontWeight: "bold" }}>{children}</Text>;
const Subtitlte2 = ({ children }) => <Text style={{ fontSize: 10.5, fontWeight: "bold" }}>{children}</Text>;
const Body1 = ({ children }) => <Text style={{ fontSize: 12 }}>{children}</Text>;

function Printable(props) {
  const {
    consultation,
    institute,
    dt,
    bookSelection,
  } = props;

  return <Document title={`${consultation.student.name} 님의 독서활동 설계서`}>
    <Page size="A4" style={{
      padding: 30,
      fontFamily: "Pretendard",
      fontSize: 9,
    }}>
      <SectionTitle>독서활동 설계서</SectionTitle>
      <View style={{ height: 15 }} />

      <Text style={{ fontSize: 12 }}>독서활동은 진로관련 호기심과 열정을 보여주는 좋은 지표입니다. 브랜딩 키워드를 바탕으로 추천하는 도서 목록을 살펴보고, 체계적으로 독서 활동계획을 세워보세요.</Text>
      <View style={{ height: 15 }} />

      <StudentInfo
        consultation={consultation}
        institute={institute}
        dt={dt}
      />
      <View style={{ height: 30 }} />

      <Subtitlte1>내가 선택한 도서</Subtitlte1>
      <View style={{ height: 7.5 }} />

      <Card style={{ padding: 15, display: "flex", flexDirection: "row" }}>
        {bookSelection.bookId && bookSelection.book.cover && <View style={{ marginRight: 15 }}>
          <Image src={bookSelection.book.cover} style={{ width: 100 }} />
        </View>}
        
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>{bookSelection.bookTitle}</Text>
          <View style={{ height: 7.5 }} />

          <Text style={{ fontSize: 9.75}}>
            <Text style={{ color: "rgb(153, 153, 153)" }}>지은이</Text>
            <Text>&ensp;</Text>
            <Text>{bookSelection.bookAuthor}</Text>
          </Text>
          
          {bookSelection.bookId && bookSelection.book.description && <>
            <View style={{ height: 7.5 }} />
            <Text style={{ fontSize: 9.75, textAlign: "justify" }}>{bookSelection.book.description}</Text>
          </>}
        </View>
      </Card>
      <View style={{ height: 15 }} />

      <Card>
        <Subtitlte2>책을 읽게된 동기를 작성해 주세요</Subtitlte2>
        <View style={{ height: 7.5 }} />

        <Body1>{bookSelection.motivation || "작성된 내용이 없습니다"}</Body1>
      </Card>
      <View style={{ height: 15 }} />

      <Card>
        <Subtitlte2>기억에 남는 구절이나 내용을 작성 해 주세요</Subtitlte2>
        <View style={{ height: 7.5 }} />

        <Body1>{bookSelection.impressiveContent || "작성된 내용이 없습니다"}</Body1>
      </Card>
      <View style={{ height: 15 }} />

      <Card>
        <Subtitlte2>그 이유는 무엇인가요?</Subtitlte2>
        <View style={{ height: 7.5 }} />

        <Body1>{bookSelection.impressiveReason || "작성된 내용이 없습니다"}</Body1>
      </Card>
      <View style={{ height: 15 }} />
    
      <Card>
        <Subtitlte2>이 책으로부터 배운점은 무엇인지 작성 해 주세요</Subtitlte2>
        <View style={{ height: 7.5 }} />

        <Body1>{bookSelection.learned || "작성된 내용이 없습니다"}</Body1>
      </Card>
      <View style={{ height: 15 }} />

      <Card>
        <Subtitlte2>위 내용을 바탕으로 앞으로의 계획은 무엇인가요?</Subtitlte2>
        <View style={{ height: 7.5 }} />

        <Body1>{bookSelection.plan || "작성된 내용이 없습니다"}</Body1>
      </Card>
    </Page>
  </Document>;
}

export default Printable;
