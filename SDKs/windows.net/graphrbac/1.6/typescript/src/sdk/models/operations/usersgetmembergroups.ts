import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersGetMemberGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class UsersGetMemberGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class UsersGetMemberGroupsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  userGetMemberGroupsParameters?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  userGetMemberGroupsParameters1?: Map<string, Map<string, any>>;
}


export class UsersGetMemberGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersGetMemberGroupsPathParams;

  @SpeakeasyMetadata()
  queryParams: UsersGetMemberGroupsQueryParams;

  @SpeakeasyMetadata()
  request: UsersGetMemberGroupsRequests;
}


export class UsersGetMemberGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userGetMemberGroupsResult?: shared.UserGetMemberGroupsResult;
}
