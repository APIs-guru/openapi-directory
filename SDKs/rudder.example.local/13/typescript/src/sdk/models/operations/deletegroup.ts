import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}

export enum DeleteGroup200ApplicationJsonActionEnum {
    DeleteGroup = "deleteGroup"
}


export class DeleteGroup200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groups", elemType: shared.Group })
  groups: shared.Group[];
}

export enum DeleteGroup200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class DeleteGroup200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: DeleteGroup200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: DeleteGroup200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: DeleteGroup200ApplicationJsonResultEnum;
}


export class DeleteGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteGroupPathParams;
}


export class DeleteGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteGroup200ApplicationJsonObject?: DeleteGroup200ApplicationJson;
}
