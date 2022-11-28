import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UserApiGetCurrentFieldsEnum {
    None = "None",
    KnownLanguages = "KnownLanguages",
    MainPicture = "MainPicture",
    OldUsernames = "OldUsernames"
}
export declare class UserApiGetCurrentQueryParams extends SpeakeasyBase {
    fields?: UserApiGetCurrentFieldsEnum;
}
export declare class UserApiGetCurrentRequest extends SpeakeasyBase {
    queryParams: UserApiGetCurrentQueryParams;
}
export declare class UserApiGetCurrentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    userForApiContract?: shared.UserForApiContract;
}
