import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  Image,
} from "@react-pdf/renderer";

const getTraitColor = (trait) => {
  switch (trait) {
    case 'R':
      return {
        backgroundColor: 'rgba(13, 59, 255, 0.1)',
        color: 'rgb(13, 59, 255)',
      };
    case 'I':
      return {
        backgroundColor: 'rgba(12, 112, 232, 0.1)',
        color: 'rgb(12, 112, 232)',
      };
    case 'A':
      return {
        backgroundColor: 'rgba(0, 181, 255, 0.1)',
        color: 'rgb(0, 181, 255)',
      };
    case 'S':
      return {
        backgroundColor: 'rgba(0, 181, 255, 0.1)',
        color: 'rgb(0, 181, 255)',
      };
    case 'E':
      return {
        backgroundColor: 'rgba(12, 112, 232, 0.1)',
        color: 'rgb(12, 112, 232)',
      };
    case 'C':
      return {
        backgroundColor: 'rgba(13, 59, 255, 0.1)',
        color: 'rgb(13, 59, 255)',
      };
    default:
      return {
        backgroundColor: 'rgba(33, 33, 33, 0.1)',
        color: 'rgb(33, 33, 33)',
      };
  }
}

const ContainerView = ({ children }) => <View style={{
  width: '210mm',
  height: '297mm',
  padding: '30px',
  backgroundColor: '#efefef',
  fontFamily: "Pretendard",
  position: 'relative',
}}>
  <React.Fragment>{children}</React.Fragment>
</View>;

const Card = ({ children, style }) => <View style={{
  padding: '15px',
  border: '1px solid #d4d4d4',
  backgroundColor: '#fff',
  ...style,
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

const DualColumn = ({ left, right, gap, style }) => <View style={{
  display: 'flex',
  flexDirection: 'row',
  ...style,
}}>
  <View style={{ flex: 1 }}>{left}</View>
  <View style={{ width: gap }}></View>
  <View style={{ flex: 1 }}>{right}</View>
</View>;

const TraitBadge = ({ trait }) => <View style={{
  width: '15px',
  height: '15px',
  borderRadius: '2.5px',
  textAlign: 'center',
  ...getTraitColor(trait),
}}>
  <Text style={{
    marginTop: '2px',
    fontSize: '9px',
    fontWeight: 'bold',
  }}>{trait}</Text>
</View>

const OrderBadge = ({ order }) => <View style={{
  width: '30px',
  height: '15px',
  marginRight: '7.5px',
  padding: '2px 4px',
  backgroundColor: '#00b5ff',
  fontSize: '9px',
  fontWeight: 'bold',
  textAlign: 'center',
  display: 'inline-block',
}}>
  <Text style={{ color: '#fff' }}>{order}</Text>
</View>

const TraitBar = ({ trait, traitDisplay, score, active }) => <View style={{
  fontSize: '10px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}}>
  <View style={{ width: '12px', textAlign: 'center' }}>
    <Text style={{ fontWeight: 'bold' }}>{trait}</Text>
  </View>

  <View style={{ width: '48px', textAlign: 'center' }}>
    <Text>{traitDisplay}</Text>
  </View>

  <View style={{ flexGrow: 1, height: '9px', backgroundColor: '#ececec' }}>
    <View style={{
      width: score ? `${score.toFixed(0)}%` : 0,
      height: '9px',
      backgroundColor: active ? '#0d3bff' : '#00b5ff',
    }}></View>
  </View>

  <View style={{ width: '36px', textAlign: 'right' }}>
    <Text>{score.toFixed(1)}</Text>
  </View>
</View>;

const TopMajorItemCard = ({ major }) => <Card style={{ flex: 1, fontSize: '7px' }}>
  <View style={{ width: '100%', height: '50px', textAlign: 'center', position: 'relative' }}>
    <Image
      style={{
        width: '50px',
        position: 'relative',
        top: 0,
        left: '50%',
        marginLeft: '-25px',
      }}
      src={`/assets/images/university-logo-fallback.png`}
    />
    <Image
      style={{
        width: '50px',
        position: 'absolute',
        top: 0,
        left: '50%',
        marginLeft: '-25px',
      }}
      src={`https://storage.googleapis.com/university-emblems/png/${encodeURI(major.univ.split("(")[0])}.png`}
    />
  </View>

  <View style={{ height: '7.5px' }}></View>
  <Text style={{ textAlign: 'center', color: '#0c70e8' }}>{major.univ}</Text>
  <Text style={{ textAlign: 'center', fontSize: '8.25px', fontWeight: 'bold' }}>{major.name}</Text>
  <View style={{ height: '12px' }}></View>

  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
    <Text style={{ fontWeight: 'bold' }}>모집인원</Text>
    {major.admissionQuota ? <Text>{major.admissionQuota}명</Text> : <Text style={{ color: "#BBB" }}>정보없음</Text>}
  </View>

  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
    <Text style={{ fontWeight: 'bold' }}>경쟁률</Text>
    {major.competitionRate ? <Text>{major.competitionRate.toFixed(1)} : 1</Text> : <Text style={{ color: "#BBB" }}>정보없음</Text>}
  </View>

  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
    <Text style={{ fontWeight: 'bold' }}>지역</Text>
    <Text>{major.locationName}</Text>  
  </View>

  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
    <Text style={{ fontWeight: 'bold' }}>학생부·교과</Text>
    {major.grade ? <Text>{Number(major.grade).toFixed(1)}등급</Text> : <Text style={{ color: "#BBB" }}>정보없음</Text>}
  </View>
</Card>;

const JobSuggestionItem = ({ item, jobRiasecCharts }) => <React.Fragment>
  <Card style={{
    borderTop: '2px solid #00b5ff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }}>
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}>
      <View style={{
        marginRight: '7.5px',
        padding: '5px 6px',
        borderRadius: '10.75px',
        backgroundColor: 'rgba(0, 181, 255, 0.1)',
      }}>
        <Text style={{ fontSize: '9.75px', fontWeight: 'bold', color: '#00b5ff' }}>{item.order}순위</Text>
      </View>
      <Text style={{ fontSize: '13px', fontWeight: 'bold' }}>{item.name}</Text>
    </View>

    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '9.75px' }}>
      <View style={{
        width: '11.25px',
        height: '11.25px',
        marginRight: '3.75px',
        border: '1.25px solid #00b5ff',
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 181, 255, 0.4)',
      }}></View>
      <Text>나의적성</Text>

      <View style={{ marginLeft: '12.5px' }}></View>

      <View style={{
        width: '11.25px',
        height: '11.25px',
        marginRight: '3.75px',
        border: '1.25px solid #cdcdcd',
        borderRadius: '50%',
        backgroundColor: 'rgba(201, 201, 201, 0.4)',
      }}></View>
      <Text>직업능력</Text>
    </View>
  </Card>
  <Card style={{ borderTop: 0 }}>
    <Text style={{ fontSize: '13px' }}>{item.jobs.map(child => child.name).join(', ')}</Text>
  </Card>
  <View style={{ marginTop: '30px' }}></View>

  <View style={{ display: 'flex', flexDirection: 'row' }}>
    {item.jobs.slice(0, 3).map((job, idx) => <React.Fragment key={`job-item-${item.order}-${idx}`}>
      <View style={{ flex: 1 }}>
        <Card style={{ padding: '10px', textAlign: 'center' }}>
          <Text style={{ fontSize: '10.5px', fontWeight: 'bold' }}>{job.name}</Text>
        </Card>
        <Card style={{ borderTop: 0 }}>
          <Image
            style={{
              width: '120px',
              marginLeft: '-60px',
              position: 'relative',
              left: '50%',
            }}
            src={jobRiasecCharts[item.order - 1][idx]}
          />
        </Card>
      </View>
      {idx < 2 && <View style={{ width: '28.75px' }}></View>}
    </React.Fragment>)}
  </View>

  {item.jobs.length >= 6 && <React.Fragment>
    <View style={{ height: '28.75px' }}></View>

    <View style={{ display: 'flex', flexDirection: 'row' }}>
      {item.jobs.slice(3, 6).map((job, idx) => <React.Fragment key={`job-item-${item.order}-${3 + idx}`}>
        <View style={{ flex: 1 }}>
          <Card style={{ padding: '10px', textAlign: 'center' }}>
            <Text style={{ fontSize: '10.5px', fontWeight: 'bold' }}>{job.name}</Text>
          </Card>
          <Card style={{ borderTop: 0 }}>
            <Image
              style={{
                width: '120px',
                marginLeft: '-60px',
                position: 'relative',
                left: '50%',
              }}
              src={jobRiasecCharts[item.order - 1][idx]}
            />
          </Card>
        </View>
        {idx < 2 && <View style={{ width: '28.75px' }}></View>}
      </React.Fragment>)}
    </View>
  </React.Fragment>}

  {item.jobs.length >= 9 && <React.Fragment>
    <View style={{ height: '28.75px' }}></View>

    <View style={{ display: 'flex', flexDirection: 'row' }}>
      {item.jobs.slice(6, 9).map((job, idx) => <React.Fragment key={`job-item-${item.order}-${6 + idx}`}>
        <View style={{ flex: 1 }}>
          <Card style={{ padding: '10px', textAlign: 'center' }}>
            <Text style={{ fontSize: '10.5px', fontWeight: 'bold' }}>{job.name}</Text>
          </Card>
          <Card style={{ borderTop: 0 }}>
            <Image
              style={{
                width: '120px',
                marginLeft: '-60px',
                position: 'relative',
                left: '50%',
              }}
              src={jobRiasecCharts[item.order - 1][idx]}
            />
          </Card>
        </View>
        {idx < 2 && <View style={{ width: '28.75px' }}></View>}
      </React.Fragment>)}
    </View>
  </React.Fragment>}
</React.Fragment>

function Printable(props) {

  const {
    consultation,
    student,
    institute,
    // teacher,
    dt,
    report,
    topMajors,
    riasecChart,
    jobRiasecCharts,
    // text,
  } = props;

  // console.log(majorUniversityEmblems);

  const riasecCategories = ['R', 'I', 'A', 'S', 'E', 'C'];
  const trait1idx = riasecCategories.indexOf(report.trait1);
  const trait2idx = riasecCategories.indexOf(report.trait2);
  const trait1Display = report.details[trait1idx].name;
  const trait2Display = report.details[trait2idx].name;
  const trait1Details = report.details[trait1idx].details;
  const trait2Details = report.details[trait2idx].details;
  const trait1Score = report.details[trait1idx].score;
  const trait2Score = report.details[trait2idx].score;
  const trait1Children = report.details[trait1idx].children.sort((a, b) => b.score - a.score);
  const trait2Children = report.details[trait2idx].children.sort((a, b) => b.score - a.score);
  const trait1ChildrenDisplay = trait1Children[0].name;
  const trait2ChildrenDisplay = trait2Children[0].name;
  const orderDisplay = ['1ST', '2ND', '3RD'];
  const jobSuggestions = report.jobSuggestions.sort((a, b) => a.order - b.order).map(item => ({ ...item, orderDisplay: orderDisplay[item.order - 1] }));
  const majorSuggestions = report.majorSuggestions.sort((a, b) => a.order - b.order).map(item => ({ ...item, orderDisplay: orderDisplay[item.order - 1] }));


  return <Document title={`${student.name} 님의 학과직업선호도검사 결과`}>
    <Page size="A4">
      <View>
        <Image src="./public/assets/images/analysis/job-major-preference-report-cover.jpg" style={{ height: "297mm" }} />
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
          <Text style={{ width: 163.5, padding: 7.5, backgroundColor: "rgb(239, 239, 239)", textAlign: "center" }}>{student.name}</Text>
          <View style={{ width: 3.75 }} />
          <Text style={{ width: 110.5, padding: 7.5, backgroundColor: "rgb(231, 236, 246)", color: "rgb(51, 69, 146)", textAlign: "center", fontWeight: 'bold' }}>검사일</Text>
          <View style={{ width: 3.75 }} />
          <Text style={{ width: 163.5, padding: 7.5, backgroundColor: "rgb(239, 239, 239)", textAlign: "center" }}>{dt}</Text>
        </View>
      </View>
    </Page>

    <Page size="A4">
      <ContainerView>
        <SectionTitle>진로선호코드 및 영역별 세부점수</SectionTitle>
        <View style={{ marginTop: '15px' }}></View>
        <Text style={{ fontSize: '12px' }}>
          미국의 진로심리학자인 John L. Holland가 제시한 직업적 성격이론에 근거하여 자신에게 적합한 진로를 탐색하거나 선택할 때 유용한 지침서로 활용 할 수 있는 검사입니다. 직업에 대한 개인 내적 선호에 관한 객관적 정보를 활용하여 Holland 유형, 진로선호 코드, 이에 매칭되는 학과계열, 직업군에 대한 정보를 제공합니다.
        </Text>
        <View style={{ marginTop: '30px' }}></View>

        <Text style={{ fontWeight: 'bold', fontSize: '13px' }}>{student.name} 님의 검사결과 요약</Text>
        <View style={{ marginTop: '7.5px' }}></View>

        <Card style={{ fontSize: '10.5px' }}>
          <DualColumn
            left={<React.Fragment>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ flex: 1, fontWeight: 'bold' }}>진로선호코드 및 유형</Text>

                <View style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
                  <View style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <TraitBadge trait={report.trait1} />
                    <Text>&ensp;{trait1Display}</Text>
                  </View>
                  <View style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <TraitBadge trait={report.trait2} />
                    <Text>&ensp;{trait2Display}</Text>
                  </View>
                </View>
              </View>

              <View style={{ marginTop: '15px' }}></View>

              <Text style={{ fontWeight: 'bold' }}>적합한 직업군 추천</Text>
              <View style={{ marginTop: '7.5px' }}></View>
              {jobSuggestions.map((item, idx) => <View key={`job_suggestion_item_${item.id}`} style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: idx < jobSuggestions.length - 1 ? '7.5px' : 0
              }}>
                <OrderBadge order={item.orderDisplay} />
                <Text>{item.name}</Text>
              </View>)}
            </React.Fragment>}
            right={<React.Fragment>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                {/*
                <Text style={{ flex: 1, fontWeight: 'bold' }}>세부 진로선호유형</Text>

                <View style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
                  <View style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <TraitBadge trait={report.trait1} />
                    <Text>&ensp;{trait1ChildrenDisplay}</Text>
                  </View>
                  <View style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <TraitBadge trait={report.trait2} />
                    <Text>&ensp;{trait2ChildrenDisplay}</Text>
                  </View>
                </View>
                */}
                <View style={{ height: '15px' }}>
                  <Text>&nbsp;</Text>
                </View>
              </View>
              <View style={{ marginTop: '14px' }}></View>

              <Text style={{ fontWeight: 'bold' }}>적합한 학과 추천</Text>
              <View style={{ marginTop: '7.5px' }}></View>
              {majorSuggestions.map((item, idx) => <View key={`major_suggestion_item_${item.id}`} style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: idx < majorSuggestions.length - 1 ? '7.5px' : 0
              }}>
                <OrderBadge order={item.orderDisplay} />
                <Text>{item.name}</Text>
              </View>)}
            </React.Fragment>}
            gap={'15px'}
          />
        </Card>
        <View style={{ marginTop: '30px' }}></View>

        <DualColumn
          left={<React.Fragment>
            <SectionTitle>검사 결과 종합</SectionTitle>
            <View style={{ marginTop: '7.5px' }}></View>

            <Card style={{ position: 'relative' }}>
              <Image
                style={{
                  width: '171px',
                  position: 'relative',
                  left: '50%',
                  marginLeft: '-88px',
                }}
                src={riasecChart}
              />
            </Card>
          </React.Fragment>}
          right={<React.Fragment>
            <SectionTitle>진로선호 유형별 점수</SectionTitle>
            <View style={{ marginTop: '7.5px' }}></View>

            <Card>
              {report.details.map((detail, idx) => <React.Fragment key={`trait_bar_${detail.code}`}>
                <TraitBar trait={detail.code} traitDisplay={detail.name} score={detail.score} active={idx === trait1idx || idx === trait2idx} />
                {idx < report.details.length - 1 && <View style={{ marginTop: '15px' }}></View>}
              </React.Fragment>)}
            </Card>
          </React.Fragment>}
          gap={'15px'}
        />

        <View style={{ marginTop: '15px' }}></View>
        <Card style={{
          borderTop: `2px solid ${getTraitColor(report.trait1).color}`,
          fontSize: '10px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <TraitBadge trait={report.trait1} />
            <Text style={{ fontSize: '13px', fontWeight: 'bold' }}>&ensp;{trait1Display}</Text>
            <Text style={{ color: '#999', margin: '0 10px' }}>|</Text>
            <Text style={{ color: '#999', fontWeight: 'bold' }}>{trait1Score.toFixed(1)}점</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            {/* trait1Children.map((item, idx) => <React.Fragment key={`trait_${report.trait1}_children_${idx}`}>
              <Text style={{ fontSize: '8px', fontWeight: 'bold' }}>{item.name}</Text>
              <Text style={{ fontSize: '8px', color: '#999', margin: '0 3px' }}>|</Text>
              <Text style={{ fontSize: '8px', color: '#999', fontWeight: 'bold' }}>{item.score.toFixed(1)}점</Text>
              {idx < trait1Children.length - 1 && <View style={{ marginRight: '7px' }}></View>}
            </React.Fragment>) */}
          </View>
        </Card>
        <Card style={{ borderTop: 0, fontSize: '10px' }}>
          <Text style={{ fontWeight: 'bold' }}>{trait1Display}의 대표적인 특징</Text>
          <View style={{ marginTop: '10px' }}></View>
          {trait1Details.map((item, idx) => <React.Fragment key={`trait_${report.trait1}_details_${idx + 1}`}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: '4px', height: '4px', backgroundColor: '#00277a' }}></View>
              <Text style={{ letterSpacing: -1 }}>&emsp;{item}</Text>
            </View>
            {idx < trait1Details.length - 1 && <View style={{ marginTop: '7.5px' }}></View>}
          </React.Fragment>)}
        </Card>

        <View style={{ marginTop: '15px' }}></View>
        <Card style={{
          borderTop: `2px solid ${getTraitColor(report.trait2).color}`,
          fontSize: '10px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <TraitBadge trait={report.trait2} />
            <Text style={{ fontSize: '13px', fontWeight: 'bold' }}>&ensp;{trait2Display}</Text>
            <Text style={{ color: '#999', margin: '0 10px' }}>|</Text>
            <Text style={{ color: '#999', fontWeight: 'bold' }}>{trait2Score.toFixed(1)}점</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            {/* trait2Children.map((item, idx) => <React.Fragment key={`trait_${report.trait2}_children_${idx}`}>
              <Text style={{ fontSize: '8px', fontWeight: 'bold' }}>{item.name}</Text>
              <Text style={{ fontSize: '8px', color: '#999', margin: '0 3px' }}>|</Text>
              <Text style={{ fontSize: '8px', color: '#999', fontWeight: 'bold' }}>{item.score.toFixed(1)}점</Text>
              {idx < trait2Children.length - 1 && <View style={{ marginRight: '7px' }}></View>}
            </React.Fragment>) */}
          </View>
        </Card>
        <Card style={{ borderTop: 0, fontSize: '10px' }}>
          <Text style={{ fontWeight: 'bold' }}>{trait2Display}의 대표적인 특징</Text>
          <View style={{ marginTop: '10px' }}></View>
          {trait2Details.map((item, idx) => <React.Fragment key={`trait_${report.trait2}_details_${idx + 1}`}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: '4px', height: '4px', backgroundColor: '#00277a' }}></View>
              <Text style={{ letterSpacing: -1 }}>&emsp;{item}</Text>
            </View>
            {idx < trait2Details.length - 1 && <View style={{ marginTop: '7.5px' }}></View>}
          </React.Fragment>)}
        </Card>
      </ContainerView>
    </Page>

    {majorSuggestions.map(item => <React.Fragment key={`major_suggeston_${item.order}`}>
      <Page size="A4">
        <ContainerView>
          {item.order === 1 && <React.Fragment>
            <SectionTitle>진로코드에 적합한 학과 추천</SectionTitle>
            <View style={{ marginTop: '32px' }}></View>
          </React.Fragment>}

          <Card style={{
            borderTop: '2px solid #00b5ff',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <View style={{
                marginRight: '7.5px',
                padding: '5px 6px',
                borderRadius: '10.75px',
                backgroundColor: 'rgba(0, 181, 255, 0.1)',
              }}>
                <Text style={{ fontSize: '9.75px', fontWeight: 'bold', color: '#00b5ff' }}>{item.order}순위</Text>
              </View>
              <Text style={{ fontSize: '13px', fontWeight: 'bold' }}>{item.name}</Text>
            </View>
          </Card>
          <Card style={{ borderTop: 0 }}>
            <Text style={{ fontSize: '13px' }}>{item.children.map(child => child.name).join(', ')}</Text>
          </Card>
          <View style={{ marginTop: '30px' }}></View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "flex-start" }}>
            {topMajors[item.order - 1].length >= 4 &&topMajors[item.order - 1].slice(0, 4).map((major, jdx) => <React.Fragment key={`major_suggestion_${item.id}_top_major_${major.id}`}>
              <TopMajorItemCard major={major} />
              {jdx < 3 && <View style={{ width: '15px' }}></View>}
            </React.Fragment>)}
          </View>
          <View style={{ height: '15px' }}></View>

          <View style={{ display: 'flex', flexDirection: 'row' }}>
            {topMajors[item.order - 1].length >= 8 && topMajors[item.order - 1].slice(4, 8).map((major, jdx) => <React.Fragment key={`major_suggestion_${item.id}_top_major_${major.id}`}>
              <TopMajorItemCard major={major} />
              {jdx < 3 && <View style={{ width: '15px' }}></View>}
            </React.Fragment>)}
          </View>
          <View style={{ height: '15px' }}></View>

          <View style={{ display: 'flex', flexDirection: 'row' }}>
            {topMajors[item.order - 1].length >= 12 && topMajors[item.order - 1].slice(8, 12).map((major, jdx) => <React.Fragment key={`major_suggestion_${item.id}_top_major_${major.id}`}>
              <TopMajorItemCard major={major} />
              {jdx < 3 && <View style={{ width: '15px' }}></View>}
            </React.Fragment>)}
          </View>

          {/* item.order === 1 && <View style={{ marginTop: '60px' }}></View> */}
        </ContainerView>
      </Page>
    </React.Fragment>)}

    {jobSuggestions.map(item => <React.Fragment key={`job_suggeston_${item.order}`}>
      <Page size="A4">
        <ContainerView>
          <JobSuggestionItem item={item} jobRiasecCharts={jobRiasecCharts} />
        </ContainerView>
      </Page>
    </React.Fragment>)}
  </Document>;
}

export default Printable;
