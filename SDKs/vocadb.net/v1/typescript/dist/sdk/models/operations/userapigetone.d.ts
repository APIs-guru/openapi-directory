import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserApiGetOnePathParams extends SpeakeasyBase {
    id: number;
}
export declare enum UserApiGetOneFieldsEnum {
    None = "None",
    KnownLanguages = "KnownLanguages",
    MainPicture = "MainPicture",
    OldUsernames = "OldUsernames"
}
export declare class UserApiGetOneQueryParams extends SpeakeasyBase {
    fields?: UserApiGetOneFieldsEnum;
}
export declare class UserApiGetOneRequest extends SpeakeasyBase {
    pathParams: UserApiGetOnePathParams;
    queryParams: UserApiGetOneQueryParams;
}
export declare class UserApiGetOneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    userForApiContract?: shared.UserForApiContract;
}
