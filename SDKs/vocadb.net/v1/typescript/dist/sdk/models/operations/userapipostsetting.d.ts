import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserApiPostSettingPathParams extends SpeakeasyBase {
    id: number;
    settingName: string;
}
export declare class UserApiPostSettingRequests extends SpeakeasyBase {
    string?: string;
    string1?: string;
    string2?: string;
    string3?: string;
    string4?: string;
}
export declare class UserApiPostSettingRequest extends SpeakeasyBase {
    pathParams: UserApiPostSettingPathParams;
    request: UserApiPostSettingRequests;
}
export declare class UserApiPostSettingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
