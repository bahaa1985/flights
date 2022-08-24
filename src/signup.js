import react from 'react'

export default function SignUP(){
    return(
        <div>
            <input name='comp_name' type='text'/>
            <input name='comp_pass' type='password'/>
            <input name='pass_confirm' type='password'/>
            <select name='comp_type'>
                <option value='1'></option>
            </select>
        </div>
    )
}