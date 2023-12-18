import { useEffect, useState } from "react";

function App() {

   const [numberStocked, setNumberStocked] = useState("")
   const [currentNumber, setCurrentNumber] = useState("")
   const [affichage, setAffichage] = useState('0')
   const [theme, setTheme] = useState('1')

   useEffect(() => {
      document.body.removeAttribute('class');
      switch (theme) {
         case '1':
            break
         case '2':
            document.body.classList.add('theme-middle')
            break
         case '3':
            document.body.classList.add('theme-light')
            break
         default:
            break
      }
   }, [theme])


   const handleNumber = (value) => {
      setCurrentNumber(prevResult => {
         setAffichage(prevResult + value)
         return prevResult + value
      })
   }
   const handleSign = (sign) => {
      setNumberStocked(prevResult => prevResult + currentNumber + sign)
      setCurrentNumber('')
      setAffichage('0')
   }
   const handleDel = () => {
      setCurrentNumber(prevResult => {
         setAffichage(prevResult.substring(0, prevResult.length - 1))
         return prevResult.substring(0, prevResult.length - 1);
      })
   }
   const handleEqual = () => {
      setNumberStocked(prevValue => {
         const result = eval(prevValue + currentNumber)
         setAffichage(result.toString().replace('.', ','))
         setCurrentNumber('')
         return prevValue + currentNumber;
      });
   };
   const handleReset = () => {
      setNumberStocked('')
      setCurrentNumber('')
      setAffichage('0')
   }
   const handleTheme = (e) => {
      setTheme(e.currentTarget.value)
   }

   return (
    <div className={'calculette'}>

      <div className="header">
         <p className={'title'}>Calculatrice</p>
         <div className="themes">
            <p>Thème </p>
            <div className="scroll-theme">
               <div className="labels">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
               </div>
               <input className={'range-theme'} id={'range-theme'} name={'range-theme'} type="range" min={1} max={3} onChange={handleTheme} />
            </div>
         </div>
      </div>

      <div className="screen">
         <p className="operations">{numberStocked}</p>
         <p className={"result"}>{affichage}</p>
      </div>

      <div className="buttons">
         <div className="button" onClick={() => handleNumber("1")}>1</div>
         <div className="button" onClick={() => handleNumber("2")}>2</div>
         <div className="button" onClick={() => handleNumber("3")}>3</div>
         <div className="button del" onClick={() => handleDel()}>DEL</div>
         <div className="button" onClick={() => handleNumber("4")}>4</div>
         <div className="button" onClick={() => handleNumber("5")}>5</div>
         <div className="button" onClick={() => handleNumber("6")}>6</div>
         <div className="button" onClick={() => handleSign('+')}>+</div>
         <div className="button" onClick={() => handleNumber("7")}>7</div>
         <div className="button" onClick={() => handleNumber("8")}>8</div>
         <div className="button" onClick={() => handleNumber("9")}>9</div>
         <div className="button less" onClick={() => handleSign('-')}>-</div>
         <div className="button dot" onClick={() => handleNumber('.')}>.</div>
         <div className="button" onClick={() => handleNumber("0")}>0</div>
         <div className="button division" onClick={() => handleSign('/')}>/</div>
         <div className="button multi" onClick={() => handleSign('*')}>x</div>

         <div className="button reset" onClick={() => handleReset()}>RESET</div>
         <div className="button equal" onClick={() => handleEqual()}>=</div>
      </div>
    </div>
  )
}

export default App
