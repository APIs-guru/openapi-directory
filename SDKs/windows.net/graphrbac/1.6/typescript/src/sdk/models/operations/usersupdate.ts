import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=upnOrObjectId" })
  upnOrObjectId: string;
}


export class UsersUpdateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class UsersUpdateRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  userUpdateParameters?: Map<string, Map<string, any>>;

  @Metadata({ data: "request, media_type=text/json" })
  userUpdateParameters1?: Map<string, Map<string, any>>;
}


export class UsersUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersUpdatePathParams;

  @Metadata()
  queryParams: UsersUpdateQueryParams;

  @Metadata()
  request: UsersUpdateRequests;
}


export class UsersUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
