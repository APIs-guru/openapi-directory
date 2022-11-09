import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddUserRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Users;
}

export enum AddUser200ApplicationJsonActionEnum {
    AddUser = "addUser"
}


export class AddUser200ApplicationJsonDataAddedUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=role" })
  role?: string[];

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class AddUser200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=addedUser" })
  addedUser: AddUser200ApplicationJsonDataAddedUser;
}

export enum AddUser200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class AddUser200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: AddUser200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: AddUser200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: AddUser200ApplicationJsonResultEnum;
}


export class AddUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  addUser200ApplicationJsonObject?: AddUser200ApplicationJson;
}
