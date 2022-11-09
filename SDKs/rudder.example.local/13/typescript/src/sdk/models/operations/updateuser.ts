import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class UpdateUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Users;
}

export enum UpdateUser200ApplicationJsonActionEnum {
    UpdateUser = "updateUser"
}


export class UpdateUser200ApplicationJsonDataUpdatedUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=role" })
  role: string[];

  @Metadata({ data: "json, name=username" })
  username: string;
}


export class UpdateUser200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=updatedUser" })
  updatedUser: UpdateUser200ApplicationJsonDataUpdatedUser;
}

export enum UpdateUser200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class UpdateUser200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: UpdateUser200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: UpdateUser200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: UpdateUser200ApplicationJsonResultEnum;
}


export class UpdateUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateUser200ApplicationJsonObject?: UpdateUser200ApplicationJson;
}
