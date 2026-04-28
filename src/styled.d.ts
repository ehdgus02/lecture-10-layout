// d.ts 파일
// 타입스크립트 엔진에게 타입(자료형)을 재지정 등을 통해 알려주기 위해 존재하는 파일
// styled-components라고 하는 라이브러리에 이미 있는 타입을 재지정해주기 위해 생성
// d.ts 파일은 프로젝트가 시작할 때 자동으로 로딩하여 구동함
// import 를 해주지 않으면 styled-components 전체가 재지정됨
import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            background: string;
            text: string;
            primary: string;
            muted: string;
        };
    }
}
