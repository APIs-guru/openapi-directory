import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LeaveGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class LeaveGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LeaveGroupPathParams;
}


export class LeaveGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  group?: shared.Group;

  @Metadata()
  statusCode: number;
}
