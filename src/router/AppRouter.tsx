import  { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import About from "../pages/About.tsx";
import Home from "../pages/Home.tsx";
import LogIn from "../pages/LogIn.tsx";

// AppRouter 컴포넌트 x , 함수 o
// 매개변수자리에 onClick이 들어오는데, 얘는 매개변수니까
// 타입스크립트에 의거하여 타입을 명시해줘야 함
const AppRouter = () => {
    // 사용자 권한.     => 일반사용자, 관리자
    //      회원 관리   => /admin/users/list
    // 이 관리 기능은 Javascript로 접근을 해야됨. 그래서 이 방식을 제공하고 있음.
    // (이 방식이 react-router가 권장하는 방식)
    const routes: RouteObject[] = [
        {
            element: <MainLayout />,
            path: "/",
            children: [
                { index: true, element: <Home /> },
                { path: "about", element: <About /> },
            ],
        },
        {
            path: "/auth/login",
            element: <LogIn />,
        },
    ];

    return createBrowserRouter(routes);
};
export default AppRouter
