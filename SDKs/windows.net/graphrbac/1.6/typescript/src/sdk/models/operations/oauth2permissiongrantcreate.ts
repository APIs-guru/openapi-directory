import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OAuth2PermissionGrantCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class OAuth2PermissionGrantCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class OAuth2PermissionGrantCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OAuth2PermissionGrantCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: OAuth2PermissionGrantCreateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class OAuth2PermissionGrantCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  oAuth2PermissionGrant?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
