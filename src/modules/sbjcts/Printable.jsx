import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  Image,
} from "@react-pdf/renderer";

const ContainerView = ({ children }) => <View style={{
  width: '210mm',
  height: '297mm',
  padding: '30px',
  backgroundColor: '#fff',
  fontFamily: "Pretendard",
  fintSize: '9px',
  position: 'relative',
}}>
  <React.Fragment>{children}</React.Fragment>
</View>;

const SectionTitle = ({ children }) => <View style={{
  display: 'flex',
  flexDirection: 'row',
}}>
  <Text style={{ fontWeight: 'bold', fontSize: '18px' }}>{children}</Text>
  <View style={{ flexGrow: 1 }}>
    <View style={{
      marginTop: '11px',
      marginLeft: '15px',
      height: '1px',
      backgroundColor: '#bbb',
    }}></View>
  </View>
</View>;

const Card = ({ children, style }) => <View style={{
  padding: '8px 15px',
  border: '1px solid #d4d4d4',
  backgroundColor: '#fff',
  fontSize: '9px',
  ...style,
}}>
  <React.Fragment>{children}</React.Fragment>
</View>;

const DualColumn = ({ left, right, gap, style }) => <View style={{
  display: 'flex',
  flexDirection: 'row',
  ...style,
}}>
  <View style={{ flex: 1 }}>{left}</View>
  <View style={{ width: gap }}></View>
  <View style={{ flex: 1 }}>{right}</View>
</View>;

const CheckMark = ({ checked, style }) => <React.Fragment>
  <View style={{
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: checked ? 'rgb(48, 113, 242)' : '#e0e0e0',
    position: 'absolute',
    top: 5.5,
    left: 21.5,
    ...style,
  }}>
    <Image src={`/assets/images/roadmap/subject-selection-report-pdf-ic-check.png`} style={{ width: 8, height: 6, position: 'absolute', top: 1.5, left: 2.25 }} />
  </View>
</React.Fragment>;

const SubjectItemCard = ({ subject }) => <React.Fragment>
  <Card style={{ borderTop: '2px solid rgb(48, 113, 242)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ fontSize: 12.75, fontWeight: 'bold' }}>{subject.subjectName}</Text>
      <View style={{ width: 6 }} />
      <View style={{ width: 1, height: 7.5, backgroundColor: '#d4d4d4' }} />
      <View style={{ width: 6 }} />
      <Text style={{ fontSize: 9.75, color: '#d4d4d4' }}>{subject.subjectKind}</Text>
    </View>
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <View style={{ backgroundColor: 'rgba(48, 113, 242, 0.1)', padding: '3px 4px', borderRadius: 2.5 }}>
        <Text style={{ color: 'rgb(48, 113, 242)' }}>{subject.subjectSelector}</Text>
      </View>
      <View style={{ width: 6 }} />
      <View style={{ backgroundColor: 'rgba(48, 113, 242, 0.1)', padding: '3px 4px', borderRadius: 2.5 }}>
        <Text style={{ color: 'rgb(48, 113, 242)' }}>{subject.subjectCategory}</Text>
      </View>
    </View>
  </Card>
  <Card style={{ borderTop: 0 }}>
    {subject.subject.description ? subject.subject.description.split('<br>').map((description, jdx) => <Text key={`subject-item-${subject.id}-description-${jdx}`}>{description}</Text>) : <></>}
  </Card>
</React.Fragment>;

function Printable(props) {
  const {
    consultation,
    institute,
    dt,
    subjects,
  } = props;

  subjects.sort((a, b) => a.id - b.id);
  
  const pages = Array.from(Array(Math.ceil(subjects.length / 8)).keys()).map(pageNum => Array.from(Array(4).keys()).map(i => 8 * pageNum + (i * 2)).filter(i => i < subjects.length));
  
  return <Document title={`${consultation.student.name} 님의 선택교과 보고서`}>
    <Page size="A4">
      <View>
        <Image src="/assets/images/roadmap/subject-selection-report-pdf-cover.jpg" style={{ height: "297mm" }} />
      </View>

      <View style={{
        position: "absolute",
        bottom: "45pt",
        left: "30pt",
        fontFamily: "Pretendard",
        fontSize: 10.5,
      }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ width: 110.5, padding: 7.5, backgroundColor: "rgb(231, 236, 246)", color: "rgb(51, 69, 146)", textAlign: "center", fontWeight: 'bold' }}>학교</Text>
          <View style={{ width: 3.75 }} />
          <Text style={{ width: 163.5, padding: 7.5, backgroundColor: "rgb(239, 239, 239)", textAlign: "center" }}>{institute.name.length > 12 ? `${institute.name.slice(0, 12)} ...` : institute.name}</Text>
          <View style={{ width: 3.75 }} />
          <Text style={{ width: 110.5, padding: 7.5, backgroundColor: "rgb(231, 236, 246)", color: "rgb(51, 69, 146)", textAlign: "center", fontWeight: 'bold' }}>학년</Text>
          <View style={{ width: 3.75 }} />
          <Text style={{ width: 163.5, padding: 7.5, backgroundColor: "rgb(239, 239, 239)", textAlign: "center" }}>{consultation.schoolGrade}학년</Text>
        </View>
        <View style={{ height: 4 }} />
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ width: 110.5, padding: 7.5, backgroundColor: "rgb(231, 236, 246)", color: "rgb(51, 69, 146)", textAlign: "center", fontWeight: 'bold' }}>반</Text>
          <View style={{ width: 3.75 }} />
          <Text style={{ width: 163.5, padding: 7.5, backgroundColor: "rgb(239, 239, 239)", textAlign: "center" }}>{consultation.schoolClass}반</Text>
          <View style={{ width: 3.75 }} />
          <Text style={{ width: 110.5, padding: 7.5, backgroundColor: "rgb(231, 236, 246)", color: "rgb(51, 69, 146)", textAlign: "center", fontWeight: 'bold' }}>번호</Text>
          <View style={{ width: 3.75 }} />
          <Text style={{ width: 163.5, padding: 7.5, backgroundColor: "rgb(239, 239, 239)", textAlign: "center" }}>{consultation.schoolClassNum}번</Text>
        </View>
        <View style={{ height: 4 }} />
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ width: 110.5, padding: 7.5, backgroundColor: "rgb(231, 236, 246)", color: "rgb(51, 69, 146)", textAlign: "center", fontWeight: 'bold' }}>이름</Text>
          <View style={{ width: 3.75 }} />
          <Text style={{ width: 163.5, padding: 7.5, backgroundColor: "rgb(239, 239, 239)", textAlign: "center" }}>{consultation.student.name}</Text>
          <View style={{ width: 3.75 }} />
          <Text style={{ width: 110.5, padding: 7.5, backgroundColor: "rgb(231, 236, 246)", color: "rgb(51, 69, 146)", textAlign: "center", fontWeight: 'bold' }}>검사일</Text>
          <View style={{ width: 3.75 }} />
          <Text style={{ width: 163.5, padding: 7.5, backgroundColor: "rgb(239, 239, 239)", textAlign: "center" }}>{dt}</Text>
        </View>
      </View>
    </Page>

    {pages.map((itemIdxList, pageNum) => <Page size="A4" key={`subjects-pdf-page-${pageNum}`}>
      <ContainerView>
        {pageNum === 0 && <React.Fragment>
          <SectionTitle>선택교과 보고서</SectionTitle>
          <View style={{ height: 15 }}/>
          <Text style={{ fontSize: 12, lineHeight: 1.5 }}>선택교과 및 성취도는 <Text style={{ fontWeight: 'bold' }}>학업역량</Text> (과목에 대한 이해를 확장할 수 있는 수준높은 심화과목 선택), <Text style={{ fontWeight: 'bold' }}>진로역량</Text> (진학하고자하는 학과의 특성에 맞춰 교과를 선택), <Text style={{ fontWeight: 'bold' }}>공동체역량</Text> (소속된 학교에 개설되지 않은 과목이라도 공동교육과정, 온라인을 통해 이수)을 평가하는 중요한 지표입니다. 선생님과 함께 브랜딩 키워드와 어울리는 선택교과를 탐색하고 최선의 선택교과 포트폴리오를 구성해보세요.</Text>
          <View style={{ height: 30 }}/>
        </React.Fragment>}

        {itemIdxList.map((itemIdx, rownum) => <View key={`subjects-pdf-page-${pageNum}-item-${itemIdx}`}>
          {<DualColumn
            left={<SubjectItemCard subject={subjects[itemIdx]} />}
            right={subjects[itemIdx+1] !== undefined ? <SubjectItemCard subject={subjects[itemIdx+1]} /> : <></>}
            gap={15}
          />}
          {rownum < itemIdxList.length - 1 && <View style={{ height: 15 }}/>}
        </View>)}
      </ContainerView>
    </Page>)}

    {consultation.roadmapSubjectSelectionSelfAssessmentAnswers && consultation.roadmapSubjectSelectionSelfAssessmentAnswers.length > 0 && <Page size="A4">
      <ContainerView>
        <SectionTitle>과목 선택 점검표</SectionTitle>
        <View style={{ height: 15 }}/>
        <View style={{ fontSize: 8.25 }}>
          <View style={{ display: 'flex', flexDirection: 'row', fontSize: 9, textAlign: 'center' }}>
            <View style={{ width: 106, padding: 6, backgroundColor: '#f4f4f4', border: '1px solid #d4d4d4', borderRight: 0 }}>
              <Text style={{ fontWeight: 'bold' }}>항목</Text>
            </View>
            <View style={{ flex: 1, padding: 6, backgroundColor: '#f4f4f4', border: '1px solid #d4d4d4', borderRight: 0 }}>
              <Text style={{ fontWeight: 'bold' }}>점검 내용</Text>
            </View>
            <View style={{ width: 53, padding: 6, backgroundColor: '#f4f4f4', border: '1px solid #d4d4d4', borderRight: 0 }}>
              <Text style={{ fontWeight: 'bold' }}>예</Text>
            </View>
            <View style={{ width: 53, padding: 6, backgroundColor: '#f4f4f4', border: '1px solid #d4d4d4' }}>
              <Text style={{ fontWeight: 'bold' }}>아니오</Text>
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
            <View style={{ width: 106, padding: 6, borderLeft: '1px solid #d4d4d4', borderBottom: '1px solid #d4d4d4', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center' }}>진로 로드맵</Text>
            </View>

            <View style={{ flex: 1, borderLeft: '1px solid #d4d4d4', borderBottom: '1px solid #d4d4d4' }}>
              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4' }}>
                <Text>직업 가치관·흥미·적성에 대한 충분한 탐색이 이루어졌는가?</Text>
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4' }}>
                <Text>진로와 직업에 대한 탐색이 충분히 이루어졌는가?</Text>
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4' }}>
                <Text>전공 희망 학과에 대한 탐색이 충분히 이루어졌는가?</Text>
              </View>

              <View style={{ padding: 6 }}>
                <Text>희망 학과와 연계된 고등학고 교과를 체계적으로 분석하였는가?</Text>
              </View>
            </View>

            <View style={{ width: 53, borderLeft: '1px solid #d4d4d4', borderBottom: '1px solid #d4d4d4' }}>
              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[0] === "Y"} />
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[1] === "Y"} />
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[2] === "Y"} />
              </View>

              <View style={{ padding: 6, position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[3] === "Y"} />
              </View>
            </View>

            <View style={{ width: 53, border: '1px solid #d4d4d4', borderTop: 0 }}>
              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[0] !== "Y"} />
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[1] !== "Y"} />
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[2] !== "Y"} />
              </View>

              <View style={{ padding: 6, position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[3] !== "Y"} />
              </View>
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
            <View style={{ width: 106, padding: 6, borderLeft: '1px solid #d4d4d4', borderBottom: '1px solid #d4d4d4', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center' }}>교육과정</Text>
            </View>

            <View style={{ flex: 1, borderLeft: '1px solid #d4d4d4', borderBottom: '1px solid #d4d4d4' }}>
              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4' }}>
                <Text>과목 선택에 대한 상담이 충분히 이루어졌는가?</Text>
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4' }}>
                <Text>2015 개정 교육과정의 편제에 대한 탐색이 충분히 이루어졌는가?</Text>
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4' }}>
                <Text>3년 동안 교과(군)은 180단위 이상, 창의적 체험활동은 24단위를 이수하는가?</Text>
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4' }}>
                <Text>기초 교과 영역(국어, 수학, 영어, 한국사) 이수 단위는 교과(군) 총 이수 180 단위의 50%(90단위)를 넘지 않는가?</Text>
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4' }}>
                <Text>진로선택 과목을 최소 3개 이상 선택해서 이수하는가?</Text>
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4' }}>
                <Text>교과 영역별 필수 이수 단위를 충족하는가?</Text>
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4' }}>
                <Text>수학이나 과학 같이 위계(이수 순서)가 있는 과목의 이수 순서를 준수하는가?</Text>
              </View>

              <View style={{ padding: 6 }}>
                <Text>교과목별 성적처리 방식을 충분히 알고 있는가?</Text>
              </View>
            </View>

            <View style={{ width: 53, borderLeft: '1px solid #d4d4d4', borderBottom: '1px solid #d4d4d4' }}>
              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[4] === "Y"} />
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[5] === "Y"} />
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[6] === "Y"} />
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[7] === "Y"} style={{ top: 11 }} />
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[8] === "Y"} />
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[9] === "Y"} />
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[10] === "Y"} />
              </View>

              <View style={{ padding: 6, position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[11] === "Y"} />
              </View>
            </View>

            <View style={{ width: 53, border: '1px solid #d4d4d4', borderTop: 0 }}>
              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[4] !== "Y"} />
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[5] !== "Y"} />
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[6] !== "Y"} />
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[7] !== "Y"} style={{ top: 11 }} />
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[8] !== "Y"} />
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[9] !== "Y"} />
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[10] !== "Y"} />
              </View>

              <View style={{ padding: 6, position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[11] !== "Y"} />
              </View>
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
            <View style={{ width: 106, padding: 6, borderLeft: '1px solid #d4d4d4', borderBottom: '1px solid #d4d4d4', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center' }}>수능체제 대학 평가</Text>
            </View>

            <View style={{ flex: 1, borderLeft: '1px solid #d4d4d4', borderBottom: '1px solid #d4d4d4' }}>
              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4' }}>
                <Text>희망하는 대학(계열)과 학과에서 권장하는 기본 과목을 파악했는가?</Text>
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4' }}>
                <Text>희망 대학에서 진로선택과목을 반영하는 방식에 대해 알고 있는가?</Text>
              </View>

              <View style={{ padding: 6 }}>
                <Text>대학수학능력시험 체제와 연계한 과목 선택도 고려하였는가?</Text>
              </View>
            </View>

            <View style={{ width: 53, borderLeft: '1px solid #d4d4d4', borderBottom: '1px solid #d4d4d4' }}>
              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[12] === "Y"} />
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[13] === "Y"} />
              </View>

              <View style={{ padding: 6, position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[14] === "Y"} />
              </View>
            </View>

            <View style={{ width: 53, border: '1px solid #d4d4d4', borderTop: 0 }}>
              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[12] !== "Y"} />
              </View>

              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[13] !== "Y"} />
              </View>

              <View style={{ padding: 6, position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[14] !== "Y"} />
              </View>
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
            <View style={{ width: 106, padding: 6, borderLeft: '1px solid #d4d4d4', borderBottom: '1px solid #d4d4d4', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center' }}>공동 교육과정</Text>
            </View>

            <View style={{ flex: 1, borderLeft: '1px solid #d4d4d4', borderBottom: '1px solid #d4d4d4' }}>
              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4' }}>
                <Text>공동교육과정을 활영하여 학교에 미개설된 진로 연계 과목을 적절하게 이수하는가?</Text>
              </View>

              <View style={{ padding: 6 }}>
                <Text>공동교육과정 과목 선택은 위계에 맞게 선택하였는가?</Text>
              </View>
            </View>

            <View style={{ width: 53, borderLeft: '1px solid #d4d4d4', borderBottom: '1px solid #d4d4d4' }}>
              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[15] === "Y"} />
              </View>

              <View style={{ padding: 6, position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[16] === "Y"} />
              </View>
            </View>

            <View style={{ width: 53, border: '1px solid #d4d4d4', borderTop: 0 }}>
              <View style={{ padding: 6, borderBottom: '1px solid #d4d4d4', position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[15] !== "Y"} />
              </View>

              <View style={{ padding: 6, position: 'relative' }}>
                <Text>&nbsp;</Text>
                <CheckMark checked={consultation.roadmapSubjectSelectionSelfAssessmentAnswers[16] !== "Y"} />
              </View>
            </View>
          </View>
        </View>
      </ContainerView>
    </Page>}
  </Document>;
}

export default Printable;
