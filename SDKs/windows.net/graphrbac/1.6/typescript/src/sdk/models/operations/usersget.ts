import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upnOrObjectId" })
  upnOrObjectId: string;
}


export class UsersGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class UsersGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersGetPathParams;

  @SpeakeasyMetadata()
  queryParams: UsersGetQueryParams;
}


export class UsersGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user?: Map<string, Map<string, any>>;
}
