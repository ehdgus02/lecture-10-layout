import styled from "styled-components";
import Header from "../components/Header.tsx";
import { Outlet } from "react-router";
import Footer from "../components/Footer.tsx";

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
`;

const Main = styled.main`
    flex: 1;
`;

// MainLayout은 컴포넌트 o
// 얘는 Props로 전달받음
function MainLayout() {
    return (
        <Wrap>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </Wrap>
    );
}

export default MainLayout;
