import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PredictMultipartRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  imageClassificationRequest?: shared.ImageClassificationRequest;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  imageClassificationRequest1?: shared.ImageClassificationRequest;
}


export class PredictMultipartSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class PredictMultipartRequest extends SpeakeasyBase {
  @Metadata()
  request?: PredictMultipartRequests;

  @Metadata()
  security: PredictMultipartSecurity;
}


export class PredictMultipartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  imageClassificationResponse?: shared.ImageClassificationResponse;

  @Metadata()
  statusCode: number;
}
