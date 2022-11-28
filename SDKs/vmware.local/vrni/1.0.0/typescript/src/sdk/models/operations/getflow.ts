import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFlowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetFlowQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetFlowSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetFlowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFlowPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFlowQueryParams;

  @SpeakeasyMetadata()
  security: GetFlowSecurity;
}


export class GetFlowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flow?: shared.Flow;

  @SpeakeasyMetadata()
  statusCode: number;
}
