import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetHostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetHostSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetHostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetHostPathParams;

  @SpeakeasyMetadata()
  queryParams: GetHostQueryParams;

  @SpeakeasyMetadata()
  security: GetHostSecurity;
}


export class GetHostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  host?: shared.Host;

  @SpeakeasyMetadata()
  statusCode: number;
}
