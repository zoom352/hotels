type options = {
  value: string;
  name: string
}

interface SelectProps {
  options: options[];
  defaultValue: string;
  value: string;
  onChange: (e: string) => void;
}

const MySelect = (props: SelectProps) => {
    const {options, defaultValue, value, onChange} = props
    return (
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <option value=''>{defaultValue}</option>
            {options.map((option: options) => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
                )}
      </select>
    )
}
  
export default MySelect;
