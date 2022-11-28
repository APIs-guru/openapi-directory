import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUserInfo200ApplicationJsonActionEnum {
    GetUserInfo = "getUserInfo"
}
export declare enum GetUserInfo200ApplicationJsonDataDigestEnum {
    Bcrypt = "BCRYPT",
    Sha512 = "SHA512",
    Sha256 = "SHA256",
    Sha1 = "SHA1",
    Md5 = "MD5"
}
export declare class GetUserInfo200ApplicationJsonData extends SpeakeasyBase {
    digest: GetUserInfo200ApplicationJsonDataDigestEnum;
    users: shared.Users[];
}
export declare enum GetUserInfo200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetUserInfo200ApplicationJson extends SpeakeasyBase {
    action: GetUserInfo200ApplicationJsonActionEnum;
    data: GetUserInfo200ApplicationJsonData;
    result: GetUserInfo200ApplicationJsonResultEnum;
}
export declare class GetUserInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getUserInfo200ApplicationJsonObject?: GetUserInfo200ApplicationJson;
}
