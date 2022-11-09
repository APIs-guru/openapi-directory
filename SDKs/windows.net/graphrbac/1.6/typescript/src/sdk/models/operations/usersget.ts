import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=upnOrObjectId" })
  upnOrObjectId: string;
}


export class UsersGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class UsersGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersGetPathParams;

  @Metadata()
  queryParams: UsersGetQueryParams;
}


export class UsersGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;

  @Metadata()
  user?: Map<string, Map<string, any>>;
}
