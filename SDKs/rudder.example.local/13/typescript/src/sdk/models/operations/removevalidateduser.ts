import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveValidatedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class RemoveValidatedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveValidatedUserPathParams;
}

export enum RemoveValidatedUser200ApplicationJsonActionEnum {
    ListUsers = "listUsers"
}

export enum RemoveValidatedUser200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class RemoveValidatedUser200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: RemoveValidatedUser200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: string;

  @Metadata({ data: "json, name=result" })
  result: RemoveValidatedUser200ApplicationJsonResultEnum;
}


export class RemoveValidatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeValidatedUser200ApplicationJsonObject?: RemoveValidatedUser200ApplicationJson;
}
