import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OAuth2PermissionGrantListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class OAuth2PermissionGrantListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$filter" })
  dollarFilter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class OAuth2PermissionGrantListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OAuth2PermissionGrantListPathParams;

  @SpeakeasyMetadata()
  queryParams: OAuth2PermissionGrantListQueryParams;
}


export class OAuth2PermissionGrantListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  oAuth2PermissionGrantListResult?: shared.OAuth2PermissionGrantListResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
