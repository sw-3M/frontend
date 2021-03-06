import React,{useState,useEffect} from 'react';
import json_date from './date.json';
import './reset.css';
import {Global,Background,Frist_text,AllPage,Bycicle,FristPage,Content,Title,Choice,Footer,GageBar} from './style';
import bycicle from './img/bycicle.png';
import background from './img/background.png';
import programming from './img/programming.png';
import {useHistory} from 'react-router-dom';

const Test = () => {
    const history = useHistory();
    const [score, setscore]=useState(0);
    const [question,setQuesetion]=useState();
    const [counter,setCounter]=useState(0);
    const counterArrey = ['첫','두','세','네','다'];
    const [data,setData]=useState(json_date);
    const[visible,setVisible]=useState(false);

    const rand_question = () => {
        const rand = Math.random() * data.length-1;
        const randInt = parseInt(rand);
        setQuesetion(data[randInt]);
        const tmp=data.filter((e,i)=>{if(i !== randInt)return e;});
        setData(tmp);
    };
    const conuting = () => {
        switch(score){
            case 0:
            case 1:
                alert('프알못');
                break;
            case 2:
            case 3:
                alert('프린이');
                break;
            case 4:
            case 5:
                alert('천성적인 개발자');
            break;
            default:
        }
    } 
    
    const onclick = (e) => {
        if(e.target.id == question.index){
            setscore(score+1);
            console.log(score);
        }
        if(counter > 4){
            console.log('end');
            conuting();
            window.history.back();
            return;
        }
        rand_question();
        setCounter(counter+1);
    }
    useEffect(()=>{rand_question();},[]);

    const cssonclick = () => {
        setCounter(counter+1);
        setVisible(true)
    }

    return (
    <>
    <Global/>
    <Background width={counter}>
        <img src={ background } />
    </Background>
    <FristPage>
        <Footer>
            <div className="bar" />
            <GageBar width={counter}></GageBar>
        </Footer>
        <Choice>
            <Bycicle width={counter}>
                <img src={ bycicle }/>
            </Bycicle>
        </Choice>
        <div class="box"></div>
        {visible|| <Frist_text className="colorPicker">
            <div>
                <img src={programming}></img>
            </div>
            <div class="text bold">
                당신의 <br/><span>개발자력은</span>몇 %인가요?
            </div>
            <div class="text">
                <span>Quiz</span>로 알아보는 나의 성향 테스트
            </div>
            <div class="start" onClick={cssonclick}>
                <span class="text1">시작하기</span>
            </div>
        </Frist_text>}
       
    </FristPage>
    
   {visible&& <AllPage>
        <section className="inner">
            <Title>
                {/* 질문 순번, 질문 내역 */}
                <p className="revised">0{counter}</p>
                <p className="question">{question&& question.question}</p>
            </Title>
            {/* 질문 선택 바 */}
            <Content>
                <div className="question_1 box text gage" onClick={onclick}>
                <div id="0">{question&& question.choice[0]}</div>
                </div>
                <div className="question_2 box text gage" onClick={onclick}>
                <div id="1" >{question&& question.choice[1]}</div>
                </div>
            </Content>
            {/* 게이지 */}
        </section>
    </AllPage>}
    </>
        
    )
}
export default Test;