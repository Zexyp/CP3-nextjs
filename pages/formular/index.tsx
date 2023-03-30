import {ChangeEvent, useState} from "react";
import styles from './styles.module.css';

export default function Index() {
    let [name, setName] = useState<string>("");
    let [email, setEmail] = useState<string>("");
    let [phone, setPhone] = useState<string>("");

    let [nameValid, setNameValid] = useState<boolean>(false);
    let [emailValid, setEmailValid] = useState<boolean>(false);
    let [phoneValid, setPhoneValid] = useState<boolean>(false);

    function validateName(e: ChangeEvent<HTMLInputElement>) {
        setNameValid(!!e.target.value)
    }

    function validateEmail(e: ChangeEvent<HTMLInputElement>) {
        setEmailValid(e.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) != null)
    }

    function validatePhone(e: ChangeEvent<HTMLInputElement>) {
        setPhoneValid(e.target.value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) != null)
    }

    return (
        <div>
            <h1>Crentials Harvestor</h1>
            <label htmlFor="name">Name</label>
            <br/>
            <input className={nameValid ? "" : styles.suspicious} id="name" value={name} onChange={e => { setName(e.target.value); validateName(e); }}/>
            <br/>
            <label htmlFor="email">Email</label>
            <br/>
            <input className={emailValid ? "" : styles.suspicious} id="email" value={email} onChange={e => { setEmail(e.target.value); validateEmail(e); }}/>
            <br/>
            <label htmlFor="phone">Phone</label>
            <br/>
            <input className={phoneValid ? "" : styles.suspicious} id="phone" value={phone} onChange={e => { setPhone(e.target.value); validatePhone(e); }}/>
            <br/>
            <button disabled={!nameValid || !emailValid || !phoneValid}>Submit</button>
        </div>
    );
}