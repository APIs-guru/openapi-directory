import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeBasicScheme extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class Security extends SpeakeasyBase {
    basicScheme: SchemeBasicScheme;
}
