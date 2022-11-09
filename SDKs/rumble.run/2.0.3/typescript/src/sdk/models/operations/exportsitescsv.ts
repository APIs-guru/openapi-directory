import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportSitesCsvSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportSitesCsvRequest extends SpeakeasyBase {
  @Metadata()
  security: ExportSitesCsvSecurity;
}


export class ExportSitesCsvResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  exportSitesCsv200TextCsvBinaryString?: Uint8Array;
}
