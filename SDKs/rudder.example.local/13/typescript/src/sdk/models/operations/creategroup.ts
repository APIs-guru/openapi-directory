import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GroupNew;
}

export enum CreateGroup200ApplicationJsonActionEnum {
    CreateGroup = "createGroup"
}


export class CreateGroup200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groups", elemType: shared.Group })
  groups: shared.Group[];
}

export enum CreateGroup200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class CreateGroup200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: CreateGroup200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: CreateGroup200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: CreateGroup200ApplicationJsonResultEnum;
}


export class CreateGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createGroup200ApplicationJsonObject?: CreateGroup200ApplicationJson;
}
