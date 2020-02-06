import styled from "styled-components";

export const Info = styled.div`
    max-width: 700px;
    margin: 0 auto:
    border-radius: 20px;
    display: grid;
    grid-template: 50px 1fr / 100px 1fr 100px;
    align-items: center;
    padding: 32px 0;
    margin: 16px 0;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
    img {
        border-radius: 50%;
        box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
        margin-top: 8px;
        margin-bottom: 8px;
        margin-left: 16px;
    }
    ul {
        margin-left: 32px;
    }
    ul .font-li {
        font-size: 18px;
        font-weight: bold;
        padding: 8px 0;
    }
    ul li {
        list-style: none;
    }
    ul .font-listeners {
        color: #EA4F90;
    }
    a {
        color: #1F589F;
        text-decoration: none;
        cursor: pointer;
    }
    a:hover {
        font-weight: bold;
    }
`;
