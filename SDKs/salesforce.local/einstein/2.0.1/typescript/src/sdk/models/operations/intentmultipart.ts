import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IntentMultipartRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  intentPredictRequest?: shared.IntentPredictRequest;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  intentPredictRequest1?: shared.IntentPredictRequest;
}


export class IntentMultipartSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class IntentMultipartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: IntentMultipartRequests;

  @SpeakeasyMetadata()
  security: IntentMultipartSecurity;
}


export class IntentMultipartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  intentPredictResponse?: shared.IntentPredictResponse;

  @SpeakeasyMetadata()
  predictionErrorResponse?: shared.PredictionErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
