import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteReportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class DeleteReportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteReportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteReportQueryParams;

  @Metadata()
  security: DeleteReportSecurity;
}


export class DeleteReport200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReport401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReport403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReport404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReport422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReport500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteReport200ApplicationJsonObject?: DeleteReport200ApplicationJson;

  @Metadata()
  deleteReport401ApplicationJsonObject?: DeleteReport401ApplicationJson;

  @Metadata()
  deleteReport403ApplicationJsonObject?: DeleteReport403ApplicationJson;

  @Metadata()
  deleteReport404ApplicationJsonObject?: DeleteReport404ApplicationJson;

  @Metadata()
  deleteReport422ApplicationJsonObject?: DeleteReport422ApplicationJson;

  @Metadata()
  deleteReport500ApplicationJsonObject?: DeleteReport500ApplicationJson;

  @Metadata()
  statusCode: number;
}
