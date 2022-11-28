import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SentimentMultipartRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  sentimentPredictRequest?: shared.SentimentPredictRequest;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  sentimentPredictRequest1?: shared.SentimentPredictRequest;
}


export class SentimentMultipartSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class SentimentMultipartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: SentimentMultipartRequests;

  @SpeakeasyMetadata()
  security: SentimentMultipartSecurity;
}


export class SentimentMultipartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sentimentPredictResponse?: shared.SentimentPredictResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
