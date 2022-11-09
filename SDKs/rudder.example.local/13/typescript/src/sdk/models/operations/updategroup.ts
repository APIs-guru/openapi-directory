import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class UpdateGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGroupPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GroupUpdate;
}

export enum UpdateGroup200ApplicationJsonActionEnum {
    UpdateGroup = "updateGroup"
}


export class UpdateGroup200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groups", elemType: shared.Group })
  groups: shared.Group[];
}

export enum UpdateGroup200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class UpdateGroup200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: UpdateGroup200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: UpdateGroup200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: UpdateGroup200ApplicationJsonResultEnum;
}


export class UpdateGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateGroup200ApplicationJsonObject?: UpdateGroup200ApplicationJson;
}
