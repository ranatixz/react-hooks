import React,{useState, useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

const ParentComp = () =>{

    const [age, setAge] = useState(22)
    const [salary, setSalary] = useState(25000)

    const incrementAge = useCallback(() =>{
        setAge(prevAge => prevAge + 1)
    },[age])
    const incrementSalary = useCallback(() =>{
        setSalary(prevSalary => prevSalary + 1000)
    },[salary])
   
    return (
        <div>
            <Title/>
            <Count text={age}/>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text={salary}/>
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComp
