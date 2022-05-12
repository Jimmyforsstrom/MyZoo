import styled from "styled-components";
const Container = styled.div`

border: 1px solid red;
`


export function Parent () {

    return (<>
    <Container/>
    <h1>Lorem Ipsum</h1>
    </>)
}