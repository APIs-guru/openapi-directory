import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AddUser200ApplicationJsonActionEnum {
    AddUser = "addUser"
}


export class AddUser200ApplicationJsonDataAddedUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string[];

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class AddUser200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addedUser" })
  addedUser: AddUser200ApplicationJsonDataAddedUser;
}

export enum AddUser200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class AddUser200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: AddUser200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: AddUser200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: AddUser200ApplicationJsonResultEnum;
}


export class AddUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Users;
}


export class AddUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addUser200ApplicationJsonObject?: AddUser200ApplicationJson;
}
