import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SchemeJsonWebTokenAuth extends SpeakeasyBase {
    authorization: string;
}
export declare class Security extends SpeakeasyBase {
    jsonWebTokenAuth: SchemeJsonWebTokenAuth;
}
