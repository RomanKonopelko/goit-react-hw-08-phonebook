import { Component } from 'react'
import s from '../../form.module.css'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Container from '../Contacts/Container'
export default class App extends Component {
    //other logic
    render() {
        return (
            <Container className={s.form__container} title='Loading...'>
                <Loader type="Bars" color="#00BFFF" height={80} width={80} />
            </Container>

        );
    }
}