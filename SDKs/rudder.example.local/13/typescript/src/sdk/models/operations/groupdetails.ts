import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}

export enum GroupDetails200ApplicationJsonActionEnum {
    GroupDetails = "groupDetails"
}


export class GroupDetails200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groups", elemType: shared.Group })
  groups: shared.Group[];
}

export enum GroupDetails200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GroupDetails200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GroupDetails200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GroupDetails200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GroupDetails200ApplicationJsonResultEnum;
}


export class GroupDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupDetailsPathParams;
}


export class GroupDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  groupDetails200ApplicationJsonObject?: GroupDetails200ApplicationJson;
}
