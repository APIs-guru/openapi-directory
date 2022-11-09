import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OAuth2PermissionGrantCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class OAuth2PermissionGrantCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class OAuth2PermissionGrantCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OAuth2PermissionGrantCreatePathParams;

  @Metadata()
  queryParams: OAuth2PermissionGrantCreateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class OAuth2PermissionGrantCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  oAuth2PermissionGrant?: any;

  @Metadata()
  statusCode: number;
}
