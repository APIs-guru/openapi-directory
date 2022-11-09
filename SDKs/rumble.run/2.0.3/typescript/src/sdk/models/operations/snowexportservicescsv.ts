import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SnowExportServicesCsvSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class SnowExportServicesCsvRequest extends SpeakeasyBase {
  @Metadata()
  security: SnowExportServicesCsvSecurity;
}


export class SnowExportServicesCsvResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  snowExportServicesCsv200TextCsvBinaryString?: Uint8Array;
}
