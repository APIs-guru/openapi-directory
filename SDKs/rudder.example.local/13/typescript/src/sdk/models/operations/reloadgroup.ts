import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReloadGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class ReloadGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReloadGroupPathParams;
}

export enum ReloadGroup200ApplicationJsonActionEnum {
    ReloadGroup = "reloadGroup"
}


export class ReloadGroup200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groups", elemType: shared.Group })
  groups: shared.Group[];
}

export enum ReloadGroup200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ReloadGroup200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ReloadGroup200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ReloadGroup200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ReloadGroup200ApplicationJsonResultEnum;
}


export class ReloadGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reloadGroup200ApplicationJsonObject?: ReloadGroup200ApplicationJson;
}
