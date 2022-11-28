import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PredictMultipartRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  imageClassificationRequest?: shared.ImageClassificationRequest;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  imageClassificationRequest1?: shared.ImageClassificationRequest;
}


export class PredictMultipartSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class PredictMultipartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PredictMultipartRequests;

  @SpeakeasyMetadata()
  security: PredictMultipartSecurity;
}


export class PredictMultipartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageClassificationResponse?: shared.ImageClassificationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
