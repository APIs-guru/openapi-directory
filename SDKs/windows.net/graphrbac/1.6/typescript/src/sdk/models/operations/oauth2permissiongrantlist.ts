import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OAuth2PermissionGrantListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class OAuth2PermissionGrantListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$filter" })
  dollarFilter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class OAuth2PermissionGrantListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OAuth2PermissionGrantListPathParams;

  @Metadata()
  queryParams: OAuth2PermissionGrantListQueryParams;
}


export class OAuth2PermissionGrantListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  oAuth2PermissionGrantListResult?: shared.OAuth2PermissionGrantListResult;

  @Metadata()
  statusCode: number;
}
