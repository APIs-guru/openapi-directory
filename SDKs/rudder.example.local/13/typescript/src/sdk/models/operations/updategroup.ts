import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}

export enum UpdateGroup200ApplicationJsonActionEnum {
    UpdateGroup = "updateGroup"
}


export class UpdateGroup200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groups", elemType: shared.Group })
  groups: shared.Group[];
}

export enum UpdateGroup200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class UpdateGroup200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: UpdateGroup200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: UpdateGroup200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: UpdateGroup200ApplicationJsonResultEnum;
}


export class UpdateGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGroupPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GroupUpdate;
}


export class UpdateGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateGroup200ApplicationJsonObject?: UpdateGroup200ApplicationJson;
}
