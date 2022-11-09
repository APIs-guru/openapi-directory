import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class UsersCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class UsersCreateRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  userCreateParameters?: Map<string, Map<string, any>>;

  @Metadata({ data: "request, media_type=text/json" })
  userCreateParameters1?: Map<string, Map<string, any>>;
}


export class UsersCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersCreatePathParams;

  @Metadata()
  queryParams: UsersCreateQueryParams;

  @Metadata()
  request: UsersCreateRequests;
}


export class UsersCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;

  @Metadata()
  user?: Map<string, Map<string, any>>;
}
