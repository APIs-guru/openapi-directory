import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatabaseExportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class GetDatabaseExportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatabaseExportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDatabaseExportQueryParams;

  @Metadata()
  security: GetDatabaseExportSecurity;
}


export class GetDatabaseExport401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabaseExport404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabaseExport500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabaseExportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDatabaseExport200ApplicationZipBinaryString?: Uint8Array;

  @Metadata()
  getDatabaseExport401ApplicationJsonObject?: GetDatabaseExport401ApplicationJson;

  @Metadata()
  getDatabaseExport404ApplicationJsonObject?: GetDatabaseExport404ApplicationJson;

  @Metadata()
  getDatabaseExport500ApplicationJsonObject?: GetDatabaseExport500ApplicationJson;

  @Metadata()
  statusCode: number;
}
