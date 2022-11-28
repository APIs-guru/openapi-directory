import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum UpdateUser200ApplicationJsonActionEnum {
    UpdateUser = "updateUser"
}


export class UpdateUser200ApplicationJsonDataUpdatedUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role: string[];

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}


export class UpdateUser200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=updatedUser" })
  updatedUser: UpdateUser200ApplicationJsonDataUpdatedUser;
}

export enum UpdateUser200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class UpdateUser200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: UpdateUser200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: UpdateUser200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: UpdateUser200ApplicationJsonResultEnum;
}


export class UpdateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Users;
}


export class UpdateUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateUser200ApplicationJsonObject?: UpdateUser200ApplicationJson;
}
