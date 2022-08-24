import react from 'react'

export default function SignUP(){
    return(
        <div>
            <input name='comp_name' type='text' placeholder='اسم الشركة'/>
            <select name='comp_type' placeholder='اسم الشركة'>
                <option value='1'>مزود</option>
                <option value='2'>عميل</option>
            </select>
            <input name='comp_pass' type='password' placeholder='كلمة المرور'/>
            <input name='pass_confirm' type='password' placeholder='تأكيد كلمة المرور'/>
            <input name='comp_tel' type='text' placeholder='رقم الموبايل'/>
        </div>
    )
}