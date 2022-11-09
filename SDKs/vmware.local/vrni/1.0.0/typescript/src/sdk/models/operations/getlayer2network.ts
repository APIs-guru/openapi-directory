import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLayer2NetworkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetLayer2NetworkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetLayer2NetworkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetLayer2NetworkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLayer2NetworkPathParams;

  @Metadata()
  queryParams: GetLayer2NetworkQueryParams;

  @Metadata()
  security: GetLayer2NetworkSecurity;
}


export class GetLayer2NetworkResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  baseL2Network?: shared.BaseL2Network;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
