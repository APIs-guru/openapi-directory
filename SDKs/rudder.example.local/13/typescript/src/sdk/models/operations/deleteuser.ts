import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum DeleteUser200ApplicationJsonActionEnum {
    DeleteUser = "deleteUser"
}


export class DeleteUser200ApplicationJsonDataDeletedUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}


export class DeleteUser200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deletedUser" })
  deletedUser: DeleteUser200ApplicationJsonDataDeletedUser;
}

export enum DeleteUser200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class DeleteUser200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: DeleteUser200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: DeleteUser200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: DeleteUser200ApplicationJsonResultEnum;
}


export class DeleteUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUserPathParams;
}


export class DeleteUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteUser200ApplicationJsonObject?: DeleteUser200ApplicationJson;
}
