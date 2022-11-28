import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SaveWorkflowUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=validatedUsers" })
  validatedUsers: string[];
}

export enum SaveWorkflowUser200ApplicationJsonActionEnum {
    AddUser = "addUser"
}

export enum SaveWorkflowUser200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class SaveWorkflowUser200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: SaveWorkflowUser200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: shared.ValidatedUser;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: SaveWorkflowUser200ApplicationJsonResultEnum;
}


export class SaveWorkflowUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SaveWorkflowUserRequestBody;
}


export class SaveWorkflowUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  saveWorkflowUser200ApplicationJsonObject?: SaveWorkflowUser200ApplicationJson;
}
