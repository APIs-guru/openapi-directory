import { SpeakeasyBase } from "../../../internal/utils";
export declare class LogOutPathParams extends SpeakeasyBase {
    token: string;
}
export declare class LogOutRequest extends SpeakeasyBase {
    pathParams: LogOutPathParams;
}
export declare class LogOutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
