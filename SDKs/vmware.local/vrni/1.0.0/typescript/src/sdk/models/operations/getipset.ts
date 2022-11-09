import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetIpSetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetIpSetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetIpSetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetIpSetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIpSetPathParams;

  @Metadata()
  queryParams: GetIpSetQueryParams;

  @Metadata()
  security: GetIpSetSecurity;
}


export class GetIpSetResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  baseIpSet?: shared.BaseIpSet;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
