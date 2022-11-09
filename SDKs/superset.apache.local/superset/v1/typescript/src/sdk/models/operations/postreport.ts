import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostReportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostReportRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ReportScheduleRestApiPost;

  @Metadata()
  security: PostReportSecurity;
}


export class PostReport201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=result" })
  result?: shared.ReportScheduleRestApiPost;
}


export class PostReport400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostReport401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostReport404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostReport500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostReportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postReport201ApplicationJsonObject?: PostReport201ApplicationJson;

  @Metadata()
  postReport400ApplicationJsonObject?: PostReport400ApplicationJson;

  @Metadata()
  postReport401ApplicationJsonObject?: PostReport401ApplicationJson;

  @Metadata()
  postReport404ApplicationJsonObject?: PostReport404ApplicationJson;

  @Metadata()
  postReport500ApplicationJsonObject?: PostReport500ApplicationJson;

  @Metadata()
  statusCode: number;
}
