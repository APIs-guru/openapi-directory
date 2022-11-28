import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupsGetMemberGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class GroupsGetMemberGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class GroupsGetMemberGroupsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  groupGetMemberGroupsParameters?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  groupGetMemberGroupsParameters1?: Map<string, Map<string, any>>;
}


export class GroupsGetMemberGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupsGetMemberGroupsPathParams;

  @SpeakeasyMetadata()
  queryParams: GroupsGetMemberGroupsQueryParams;

  @SpeakeasyMetadata()
  request: GroupsGetMemberGroupsRequests;
}


export class GroupsGetMemberGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  groupGetMemberGroupsResult?: shared.GroupGetMemberGroupsResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
