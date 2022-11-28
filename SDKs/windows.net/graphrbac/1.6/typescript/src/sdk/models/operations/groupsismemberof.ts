import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupsIsMemberOfPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class GroupsIsMemberOfQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class GroupsIsMemberOfRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  checkGroupMembershipParameters?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  checkGroupMembershipParameters1?: Map<string, Map<string, any>>;
}


export class GroupsIsMemberOfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupsIsMemberOfPathParams;

  @SpeakeasyMetadata()
  queryParams: GroupsIsMemberOfQueryParams;

  @SpeakeasyMetadata()
  request: GroupsIsMemberOfRequests;
}


export class GroupsIsMemberOfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkGroupMembershipResult?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
