import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportWirelessCsvQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportWirelessCsvSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportWirelessCsvRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExportWirelessCsvQueryParams;

  @SpeakeasyMetadata()
  security: ExportWirelessCsvSecurity;
}


export class ExportWirelessCsvResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  exportWirelessCsv200TextCsvBinaryString?: Uint8Array;
}
