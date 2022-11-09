import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetUserInfo200ApplicationJsonActionEnum {
    GetUserInfo = "getUserInfo"
}

export enum GetUserInfo200ApplicationJsonDataDigestEnum {
    Bcrypt = "BCRYPT"
,    Sha512 = "SHA512"
,    Sha256 = "SHA256"
,    Sha1 = "SHA1"
,    Md5 = "MD5"
}


export class GetUserInfo200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=digest" })
  digest: GetUserInfo200ApplicationJsonDataDigestEnum;

  @Metadata({ data: "json, name=users", elemType: shared.Users })
  users: shared.Users[];
}

export enum GetUserInfo200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetUserInfo200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetUserInfo200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetUserInfo200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetUserInfo200ApplicationJsonResultEnum;
}


export class GetUserInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getUserInfo200ApplicationJsonObject?: GetUserInfo200ApplicationJson;
}
