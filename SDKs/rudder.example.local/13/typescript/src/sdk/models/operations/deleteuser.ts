import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class DeleteUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUserPathParams;
}

export enum DeleteUser200ApplicationJsonActionEnum {
    DeleteUser = "deleteUser"
}


export class DeleteUser200ApplicationJsonDataDeletedUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=username" })
  username: string;
}


export class DeleteUser200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=deletedUser" })
  deletedUser: DeleteUser200ApplicationJsonDataDeletedUser;
}

export enum DeleteUser200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class DeleteUser200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: DeleteUser200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: DeleteUser200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: DeleteUser200ApplicationJsonResultEnum;
}


export class DeleteUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteUser200ApplicationJsonObject?: DeleteUser200ApplicationJson;
}
