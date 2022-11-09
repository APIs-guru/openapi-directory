import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupsAddOwnerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class GroupsAddOwnerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class GroupsAddOwnerRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  addOwnerParameters?: Map<string, Map<string, any>>;

  @Metadata({ data: "request, media_type=text/json" })
  addOwnerParameters1?: Map<string, Map<string, any>>;
}


export class GroupsAddOwnerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupsAddOwnerPathParams;

  @Metadata()
  queryParams: GroupsAddOwnerQueryParams;

  @Metadata()
  request: GroupsAddOwnerRequests;
}


export class GroupsAddOwnerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
