import styled from "styled-components/native"

export const ImageContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    margin-left: 5px;
`

export const NameContainer = styled.View`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    
`
export const UserPhoto = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 100px;
`
export const UserSmallPhoto = styled.Image`
    width: 25px;
    height: 25px;
    border-radius: 100px;
`
export const UserName = styled.Text`
    font-weight: bold;
    color: black;
`

export const PostImage = styled.Image`
    width: 100%;
    height: 400px;
    margin-top: 10px;
`

export const B = styled.Text`
    font-weight: bold;
    color: black;
`