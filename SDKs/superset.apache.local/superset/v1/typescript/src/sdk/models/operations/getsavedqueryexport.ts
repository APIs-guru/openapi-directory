import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSavedQueryExportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class GetSavedQueryExportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetSavedQueryExport400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryExport401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryExport404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryExport500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSavedQueryExportQueryParams;

  @SpeakeasyMetadata()
  security: GetSavedQueryExportSecurity;
}


export class GetSavedQueryExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSavedQueryExport200ApplicationZipBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getSavedQueryExport400ApplicationJsonObject?: GetSavedQueryExport400ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQueryExport401ApplicationJsonObject?: GetSavedQueryExport401ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQueryExport404ApplicationJsonObject?: GetSavedQueryExport404ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQueryExport500ApplicationJsonObject?: GetSavedQueryExport500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
