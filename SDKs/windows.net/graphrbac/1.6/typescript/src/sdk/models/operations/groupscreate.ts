import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class GroupsCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class GroupsCreateRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  groupCreateParameters?: Map<string, Map<string, any>>;

  @Metadata({ data: "request, media_type=text/json" })
  groupCreateParameters1?: Map<string, Map<string, any>>;
}


export class GroupsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupsCreatePathParams;

  @Metadata()
  queryParams: GroupsCreateQueryParams;

  @Metadata()
  request: GroupsCreateRequests;
}


export class GroupsCreateResponse extends SpeakeasyBase {
  @Metadata()
  adGroup?: Map<string, Map<string, any>>;

  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
