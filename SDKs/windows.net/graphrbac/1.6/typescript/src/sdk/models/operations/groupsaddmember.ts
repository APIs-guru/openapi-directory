import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupsAddMemberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupObjectId" })
  groupObjectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class GroupsAddMemberQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class GroupsAddMemberRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  groupAddMemberParameters?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  groupAddMemberParameters1?: Map<string, Map<string, any>>;
}


export class GroupsAddMemberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupsAddMemberPathParams;

  @SpeakeasyMetadata()
  queryParams: GroupsAddMemberQueryParams;

  @SpeakeasyMetadata()
  request: GroupsAddMemberRequests;
}


export class GroupsAddMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
