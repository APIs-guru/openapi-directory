import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SentimentMultipartRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  sentimentPredictRequest?: shared.SentimentPredictRequest;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  sentimentPredictRequest1?: shared.SentimentPredictRequest;
}


export class SentimentMultipartSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class SentimentMultipartRequest extends SpeakeasyBase {
  @Metadata()
  request?: SentimentMultipartRequests;

  @Metadata()
  security: SentimentMultipartSecurity;
}


export class SentimentMultipartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sentimentPredictResponse?: shared.SentimentPredictResponse;

  @Metadata()
  statusCode: number;
}
