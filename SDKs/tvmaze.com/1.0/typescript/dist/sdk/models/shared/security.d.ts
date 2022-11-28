import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeUsertoken extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class Security extends SpeakeasyBase {
    usertoken: SchemeUsertoken;
}
