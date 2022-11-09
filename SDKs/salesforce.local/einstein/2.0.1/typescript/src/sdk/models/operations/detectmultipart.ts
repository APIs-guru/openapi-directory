import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DetectMultipartRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  objectDetectionRequest?: shared.ObjectDetectionRequest;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  objectDetectionRequest1?: shared.ObjectDetectionRequest;
}


export class DetectMultipartSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class DetectMultipartRequest extends SpeakeasyBase {
  @Metadata()
  request?: DetectMultipartRequests;

  @Metadata()
  security: DetectMultipartSecurity;
}


export class DetectMultipartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  objectDetectionResponse?: shared.ObjectDetectionResponse;

  @Metadata()
  statusCode: number;
}
