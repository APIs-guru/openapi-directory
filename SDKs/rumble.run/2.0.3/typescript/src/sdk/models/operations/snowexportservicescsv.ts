import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SnowExportServicesCsvSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class SnowExportServicesCsvRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: SnowExportServicesCsvSecurity;
}


export class SnowExportServicesCsvResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  snowExportServicesCsv200TextCsvBinaryString?: Uint8Array;
}
