import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostReportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostReport201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.ReportScheduleRestApiPost;
}


export class PostReport400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostReport401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostReport404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostReport500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ReportScheduleRestApiPost;

  @SpeakeasyMetadata()
  security: PostReportSecurity;
}


export class PostReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postReport201ApplicationJsonObject?: PostReport201ApplicationJson;

  @SpeakeasyMetadata()
  postReport400ApplicationJsonObject?: PostReport400ApplicationJson;

  @SpeakeasyMetadata()
  postReport401ApplicationJsonObject?: PostReport401ApplicationJson;

  @SpeakeasyMetadata()
  postReport404ApplicationJsonObject?: PostReport404ApplicationJson;

  @SpeakeasyMetadata()
  postReport500ApplicationJsonObject?: PostReport500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
