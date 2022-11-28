import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DetectMultipartRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  objectDetectionRequest?: shared.ObjectDetectionRequest;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  objectDetectionRequest1?: shared.ObjectDetectionRequest;
}


export class DetectMultipartSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class DetectMultipartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: DetectMultipartRequests;

  @SpeakeasyMetadata()
  security: DetectMultipartSecurity;
}


export class DetectMultipartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  objectDetectionResponse?: shared.ObjectDetectionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
