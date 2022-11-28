import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLayer2NetworkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetLayer2NetworkQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetLayer2NetworkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetLayer2NetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLayer2NetworkPathParams;

  @SpeakeasyMetadata()
  queryParams: GetLayer2NetworkQueryParams;

  @SpeakeasyMetadata()
  security: GetLayer2NetworkSecurity;
}


export class GetLayer2NetworkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  baseL2Network?: shared.BaseL2Network;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
