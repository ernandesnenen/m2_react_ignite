import styled from "styled-components";
import {darken} from 'polished'

export const Container = styled.form`

h2{
    color: var(--text-title);
    font-size:1.5rem;
    margin-bottom: 2rem;
}

input{
    width:100%;
    padding: 0 1.5rem;
    border-radius:0.25rem;
    height: 4rem;
    border: 1px solid #d7d7d7d7;
    background: #e7e9ee;
    font-size: 1rem;
    font-weight:400;

    &::placeholder{
        color: var(--text-body);
    }
    & + input{
        margin-top: 1rem;
    }
}
button[type='submit']{
    width:100%;
    padding: 0 1.5rem;
    border-radius:0.25rem;
    height: 4rem;
    background: var(--green);
    margin-top: 1rem;
    color: #fff;
    border:0;
    font-size: 1.5rem;
    font-weight:600;

    transition: filter 0.2s;

    &:hover{
        filter:brightness(0.9)
    }
}
`
// ----------------------------------------------------------------------------
export const TypeTrasaction = styled.div`
margin: 1rem 0;
display:grid;
grid-template-columns: repeat(2, 1fr);
gap: 0.5rem;

button{
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 0 1.5rem;
    border-radius:0.25rem;
    border-color: #d7d7d7d7;
    height: 4rem;   
    background: transparent;
    transition: border-color 1s;
    &:hover{
        border-color: ${darken(0.1, '#d7d7d7')}
    }
    img{
        width:20px;
        height:20px;
    }
    span{
        display:inline-block;
        font-size: 1rem;
        margin-left:1rem;
        color: var(--text-title);

    }
}
`