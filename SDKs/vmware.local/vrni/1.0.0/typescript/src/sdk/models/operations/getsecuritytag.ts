import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSecurityTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSecurityTagQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetSecurityTagSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetSecurityTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSecurityTagPathParams;

  @Metadata()
  queryParams: GetSecurityTagQueryParams;

  @Metadata()
  security: GetSecurityTagSecurity;
}


export class GetSecurityTagResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  securityTag?: shared.SecurityTag;

  @Metadata()
  statusCode: number;
}
