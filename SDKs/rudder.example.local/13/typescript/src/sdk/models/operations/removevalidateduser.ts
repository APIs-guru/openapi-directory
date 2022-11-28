import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveValidatedUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum RemoveValidatedUser200ApplicationJsonActionEnum {
    ListUsers = "listUsers"
}

export enum RemoveValidatedUser200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class RemoveValidatedUser200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: RemoveValidatedUser200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: RemoveValidatedUser200ApplicationJsonResultEnum;
}


export class RemoveValidatedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveValidatedUserPathParams;
}


export class RemoveValidatedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeValidatedUser200ApplicationJsonObject?: RemoveValidatedUser200ApplicationJson;
}
