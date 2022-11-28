import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateGroup200ApplicationJsonActionEnum {
    CreateGroup = "createGroup"
}


export class CreateGroup200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groups", elemType: shared.Group })
  groups: shared.Group[];
}

export enum CreateGroup200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class CreateGroup200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: CreateGroup200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: CreateGroup200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: CreateGroup200ApplicationJsonResultEnum;
}


export class CreateGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GroupNew;
}


export class CreateGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createGroup200ApplicationJsonObject?: CreateGroup200ApplicationJson;
}
