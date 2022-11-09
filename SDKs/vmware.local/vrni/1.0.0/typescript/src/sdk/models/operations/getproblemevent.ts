import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProblemEventPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetProblemEventQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetProblemEventSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetProblemEventRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProblemEventPathParams;

  @Metadata()
  queryParams: GetProblemEventQueryParams;

  @Metadata()
  security: GetProblemEventSecurity;
}


export class GetProblemEventResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  problemEvent?: shared.ProblemEvent;

  @Metadata()
  statusCode: number;
}
