import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSavedQueryExportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class GetSavedQueryExportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetSavedQueryExportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSavedQueryExportQueryParams;

  @Metadata()
  security: GetSavedQueryExportSecurity;
}


export class GetSavedQueryExport400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryExport401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryExport404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryExport500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryExportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSavedQueryExport200ApplicationZipBinaryString?: Uint8Array;

  @Metadata()
  getSavedQueryExport400ApplicationJsonObject?: GetSavedQueryExport400ApplicationJson;

  @Metadata()
  getSavedQueryExport401ApplicationJsonObject?: GetSavedQueryExport401ApplicationJson;

  @Metadata()
  getSavedQueryExport404ApplicationJsonObject?: GetSavedQueryExport404ApplicationJson;

  @Metadata()
  getSavedQueryExport500ApplicationJsonObject?: GetSavedQueryExport500ApplicationJson;

  @Metadata()
  statusCode: number;
}
