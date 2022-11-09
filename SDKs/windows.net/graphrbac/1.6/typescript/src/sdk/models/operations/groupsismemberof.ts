import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupsIsMemberOfPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class GroupsIsMemberOfQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class GroupsIsMemberOfRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  checkGroupMembershipParameters?: Map<string, Map<string, any>>;

  @Metadata({ data: "request, media_type=text/json" })
  checkGroupMembershipParameters1?: Map<string, Map<string, any>>;
}


export class GroupsIsMemberOfRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupsIsMemberOfPathParams;

  @Metadata()
  queryParams: GroupsIsMemberOfQueryParams;

  @Metadata()
  request: GroupsIsMemberOfRequests;
}


export class GroupsIsMemberOfResponse extends SpeakeasyBase {
  @Metadata()
  checkGroupMembershipResult?: Map<string, Map<string, any>>;

  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
