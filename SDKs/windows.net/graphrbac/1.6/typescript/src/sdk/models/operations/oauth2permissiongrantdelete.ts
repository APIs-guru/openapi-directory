import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OAuth2PermissionGrantDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" })
  objectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class OAuth2PermissionGrantDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class OAuth2PermissionGrantDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OAuth2PermissionGrantDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: OAuth2PermissionGrantDeleteQueryParams;
}


export class OAuth2PermissionGrantDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
