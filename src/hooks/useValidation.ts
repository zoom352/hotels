import { useEffect, useState } from "react"

const useValidation = (value: any, validations: any) => {
  const [isEmpty, setEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)
  const [maxLengthError, setMaxLengthError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  
  useEffect(() => {
    for(const validation in validations){
      switch (validation) {
        case 'minLengthError':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false) 
        break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true)
        break;
        case 'maxLengthError':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false) 
        break;
        case 'emailError':
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
      }
    }
  }, [value])
  
    return {
      isEmpty,
      minLengthError,
      maxLengthError,
      emailError
    }
  }
  
const useInput = (initialValue: any, validations: any) => {
      const [value, setValue] = useState(initialValue)
      const [isDirty, setDirty] = useState(false)
      const valid = useValidation(value, validations)
  
      const onChange = (e: any) => {
        setValue(e.target.value)
      }
  
      const onBlur = (e: any) => {
        setDirty(true)
      }
  
      return {
        value, 
        onChange,
        onBlur,
        isDirty,
        ...valid
      }
  }

export default useInput;
