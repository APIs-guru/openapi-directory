import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProblemEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetProblemEventQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetProblemEventSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetProblemEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProblemEventPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProblemEventQueryParams;

  @SpeakeasyMetadata()
  security: GetProblemEventSecurity;
}


export class GetProblemEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemEvent?: shared.ProblemEvent;

  @SpeakeasyMetadata()
  statusCode: number;
}
