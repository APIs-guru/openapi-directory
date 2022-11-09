import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class DeleteGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteGroupPathParams;
}

export enum DeleteGroup200ApplicationJsonActionEnum {
    DeleteGroup = "deleteGroup"
}


export class DeleteGroup200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groups", elemType: shared.Group })
  groups: shared.Group[];
}

export enum DeleteGroup200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class DeleteGroup200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: DeleteGroup200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: DeleteGroup200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: DeleteGroup200ApplicationJsonResultEnum;
}


export class DeleteGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteGroup200ApplicationJsonObject?: DeleteGroup200ApplicationJson;
}
