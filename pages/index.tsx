
import CircleBox from "@/components/CircleBox";
import { Question, questions } from "@/data/data";
import Image from "next/image";
import Header from "@/components/Header";
import { Box, Typography,Button } from "@mui/material";
import { useState } from "react";


export default function Home() {
  const [selectedBox, setSelectedBox] = useState<{ [id: number]: number }>(
    questions.reduce((prev, curr) => ({ ...prev, [curr.id]: 0 }), {})
  );

  const [typeScores, setTypeScores] = useState<{ [type: string]: number }>({
    energy: 0,
    information: 0,
    decision: 0,
    lifeStyle: 0,
  });


  const handleBoxClick = (questionId: number, value: number) => {
    const prevValue = selectedBox[questionId];  // 前回の値を取得
  
    setSelectedBox(prev => ({ ...prev, [questionId]: value }));
  
    const questionType = questions.find((q) => q.id === questionId)?.type;
    if (questionType) {
      setTypeScores((prev) => ({
        ...prev,
        [questionType]: (prev[questionType] || 0) - prevValue + value,  // 前回の値を引き、新たな値を加える
      }));
    }
    
  }  


  const [message, setMessage] = useState<string>("") 
  const [now, setNow] = useState<string>("")  

  const handleSubmit = () => {
     const personality = calculatePersonality(typeScores)
     setMessage("あなたの性格タイプは " + personality + " です！")
   }
 
    // スコアをもとにパーソナリティを計算
  const calculatePersonality = (typeScores: { [type: string]: number }) => {
    const personality = [
      typeScores.energy > 0 ? 'E' : 'I',
      typeScores.information > 0 ? 'S' : 'N',
      typeScores.decision > 0 ? 'T' : 'F',
      typeScores.lifeStyle > 0 ? 'J' : 'P',
    ].join('');
    setNow("energy:"+typeScores.energy+"&information:"+typeScores.information+"decision:"+typeScores.decision+"lifeStyle :"+typeScores.lifeStyle)
    return personality;
  };

  
  return (
    <>
      <Header />
      {questions.map((question:Question) => (
        <Box sx={{mt:10,  mx:"auto", width: '100%', maxWidth:"800px",}}>
        <Typography sx={{fontWeight:"bold"}}>Q, {question.text}</Typography>
      
        <Box
          sx={{
            mt:10,
            mx:"auto",
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            maxWidth:"800px",
          }}
        >
<CircleBox onClick={() => handleBoxClick(question.id, 2)} selected={selectedBox[question.id] === 2}/>
<CircleBox onClick={() => handleBoxClick(question.id, 1)} selected={selectedBox[question.id] === 1}/>
<CircleBox onClick={() => handleBoxClick(question.id, 0)} selected={selectedBox[question.id] === 0}/>
<CircleBox onClick={() => handleBoxClick(question.id, -1)} selected={selectedBox[question.id] === -1}/>
<CircleBox onClick={() => handleBoxClick(question.id, -2)} selected={selectedBox[question.id] === -2}/>
        </Box>
        <Box sx={{display:"flex", justifyContent:"space-between", mx:6, mt:2}}>
            <Typography sx={{color:"rgb(89, 118, 138)", fontWeight:"bold"}}>同意する</Typography>
            <Typography sx={{color:"rgb(255, 107, 107)", fontWeight:"bold"}}>同意しない</Typography>
          </Box>
        </Box>
      ))}
  
  

<Button variant="contained" sx={{mt:4, width:"100px"}} onClick={handleSubmit}>診断する</Button>
<Typography sx={{mt:4, fontSize:"2rem"}}>{message}</Typography>

    </>
    
  )
}