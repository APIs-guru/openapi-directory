import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class GroupDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupDetailsPathParams;
}

export enum GroupDetails200ApplicationJsonActionEnum {
    GroupDetails = "groupDetails"
}


export class GroupDetails200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groups", elemType: shared.Group })
  groups: shared.Group[];
}

export enum GroupDetails200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GroupDetails200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GroupDetails200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GroupDetails200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GroupDetails200ApplicationJsonResultEnum;
}


export class GroupDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  groupDetails200ApplicationJsonObject?: GroupDetails200ApplicationJson;
}
