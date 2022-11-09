import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IntentMultipartRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  intentPredictRequest?: shared.IntentPredictRequest;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  intentPredictRequest1?: shared.IntentPredictRequest;
}


export class IntentMultipartSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class IntentMultipartRequest extends SpeakeasyBase {
  @Metadata()
  request?: IntentMultipartRequests;

  @Metadata()
  security: IntentMultipartSecurity;
}


export class IntentMultipartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  intentPredictResponse?: shared.IntentPredictResponse;

  @Metadata()
  predictionErrorResponse?: shared.PredictionErrorResponse;

  @Metadata()
  statusCode: number;
}
