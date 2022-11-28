import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteReportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class DeleteReportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteReport200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReport401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReport403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReport404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReport422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReport500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteReportQueryParams;

  @SpeakeasyMetadata()
  security: DeleteReportSecurity;
}


export class DeleteReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteReport200ApplicationJsonObject?: DeleteReport200ApplicationJson;

  @SpeakeasyMetadata()
  deleteReport401ApplicationJsonObject?: DeleteReport401ApplicationJson;

  @SpeakeasyMetadata()
  deleteReport403ApplicationJsonObject?: DeleteReport403ApplicationJson;

  @SpeakeasyMetadata()
  deleteReport404ApplicationJsonObject?: DeleteReport404ApplicationJson;

  @SpeakeasyMetadata()
  deleteReport422ApplicationJsonObject?: DeleteReport422ApplicationJson;

  @SpeakeasyMetadata()
  deleteReport500ApplicationJsonObject?: DeleteReport500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
