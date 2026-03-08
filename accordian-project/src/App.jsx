import React from 'react'
import { useState } from 'react'

const questions =[
  {
     ques:'Do I have to allow the use of cookies?',
     ans:'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
     uniId:'ans1'
  },
   {
     ques:'How do I change my My Page password?',
     ans:'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
     uniId:'ans2'
  },
   {
     ques:'What is BankID?',
     ans:'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
     uniId:'ans3'
  },
   {
     ques:'Whose birth number can I use?',
     ans:'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
     uniId:'ans4'
  },
   {
     ques:'When do I recieve a password ordered by letter?',
     ans:'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan.',
     uniId:'ans5'
  }
]
const App = () => {
 
  const[openIds, setOpenIds] = useState([])
  const [checkBox, setCheckBox] = useState(false)
  const [openId, setOpenId] = useState('')

  const onClicked = (id) => {
    if(checkBox){
    openIds.includes(id)? setOpenIds(openIds.filter(item => item !== id))
    :setOpenIds([...openIds, id])
    }else{
       setOpenId(openId === id ? '' : id)
    }
  }

     
  return (
    <div>
      <h1>Accordion</h1>
      <hr />
      <h4>Is multiple open accordion allowed?
        <input type="checkbox"
        onClick={()=>{
          setCheckBox(!checkBox)
          setOpenIds([])
          setOpenId('')
        }}
        />
      </h4>
      {
        questions.map(function(elem){
         return <div className="messages"
         key={elem.uniId}
         >
       <h3>{elem.ques}</h3>
      
       <button
  
       onClick={()=>{
        onClicked(elem.uniId)
       }}
       > {checkBox ? openIds.includes(elem.uniId) ? '-' : '+' 
             : openId === elem.uniId ? '-' : '+'}</button>
          {checkBox ? openIds.includes(elem.uniId) && <p>{elem.ans}</p>
          : openId === elem.uniId && <p>{elem.ans}</p>}
      </div>
      
        })
      }
     
    </div>
  )
}

export default App




