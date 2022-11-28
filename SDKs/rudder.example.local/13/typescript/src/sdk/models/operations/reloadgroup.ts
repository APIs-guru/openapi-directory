import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReloadGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}

export enum ReloadGroup200ApplicationJsonActionEnum {
    ReloadGroup = "reloadGroup"
}


export class ReloadGroup200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groups", elemType: shared.Group })
  groups: shared.Group[];
}

export enum ReloadGroup200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ReloadGroup200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ReloadGroup200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ReloadGroup200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ReloadGroup200ApplicationJsonResultEnum;
}


export class ReloadGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReloadGroupPathParams;
}


export class ReloadGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reloadGroup200ApplicationJsonObject?: ReloadGroup200ApplicationJson;
}
