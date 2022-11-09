import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SaveWorkflowUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=validatedUsers" })
  validatedUsers: string[];
}


export class SaveWorkflowUserRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: SaveWorkflowUserRequestBody;
}

export enum SaveWorkflowUser200ApplicationJsonActionEnum {
    AddUser = "addUser"
}

export enum SaveWorkflowUser200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class SaveWorkflowUser200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: SaveWorkflowUser200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: shared.ValidatedUser;

  @Metadata({ data: "json, name=result" })
  result: SaveWorkflowUser200ApplicationJsonResultEnum;
}


export class SaveWorkflowUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  saveWorkflowUser200ApplicationJsonObject?: SaveWorkflowUser200ApplicationJson;
}
