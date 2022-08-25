import React from 'react'
// import './signup.css'
export default function SignUP(){
    return(
        <div>
            <form>
                <input name='comp_name' type='text' placeholder='اسم الشركة'/>
                <br/>
                <label for='comp_type'>اختر نوع الشركة</label>
                <select name='comp_type' id='comp_type'>
                    <option value='1'>مزود</option>
                    <option value='2'>عميل</option>
                </select>
                <br/>
                <input name='comp_pass' type='password' placeholder='كلمة المرور'/>
                <br/>
                <input name='pass_confirm' type='password' placeholder='تأكيد كلمة المرور'/>
                <br/>
                <input name='comp_tel' type='text' placeholder='رقم الموبايل'/>
                <br/>
                <input name='submit_btn' type='submit'>حفظ</input>
            </form>            
            <p>
                Hi Bahaa
            </p>
        </div>
    )
}