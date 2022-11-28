import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSecurityTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSecurityTagQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetSecurityTagSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetSecurityTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSecurityTagPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSecurityTagQueryParams;

  @SpeakeasyMetadata()
  security: GetSecurityTagSecurity;
}


export class GetSecurityTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  securityTag?: shared.SecurityTag;

  @SpeakeasyMetadata()
  statusCode: number;
}
