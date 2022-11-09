import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupsGetMemberGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class GroupsGetMemberGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class GroupsGetMemberGroupsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  groupGetMemberGroupsParameters?: Map<string, Map<string, any>>;

  @Metadata({ data: "request, media_type=text/json" })
  groupGetMemberGroupsParameters1?: Map<string, Map<string, any>>;
}


export class GroupsGetMemberGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupsGetMemberGroupsPathParams;

  @Metadata()
  queryParams: GroupsGetMemberGroupsQueryParams;

  @Metadata()
  request: GroupsGetMemberGroupsRequests;
}


export class GroupsGetMemberGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  groupGetMemberGroupsResult?: shared.GroupGetMemberGroupsResult;

  @Metadata()
  statusCode: number;
}
