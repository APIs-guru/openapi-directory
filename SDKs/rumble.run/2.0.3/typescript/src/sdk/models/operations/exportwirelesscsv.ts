import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportWirelessCsvQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportWirelessCsvSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportWirelessCsvRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ExportWirelessCsvQueryParams;

  @Metadata()
  security: ExportWirelessCsvSecurity;
}


export class ExportWirelessCsvResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  exportWirelessCsv200TextCsvBinaryString?: Uint8Array;
}
