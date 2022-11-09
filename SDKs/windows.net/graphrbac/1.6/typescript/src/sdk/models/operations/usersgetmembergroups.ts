import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersGetMemberGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class UsersGetMemberGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class UsersGetMemberGroupsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  userGetMemberGroupsParameters?: Map<string, Map<string, any>>;

  @Metadata({ data: "request, media_type=text/json" })
  userGetMemberGroupsParameters1?: Map<string, Map<string, any>>;
}


export class UsersGetMemberGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersGetMemberGroupsPathParams;

  @Metadata()
  queryParams: UsersGetMemberGroupsQueryParams;

  @Metadata()
  request: UsersGetMemberGroupsRequests;
}


export class UsersGetMemberGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;

  @Metadata()
  userGetMemberGroupsResult?: shared.UserGetMemberGroupsResult;
}
