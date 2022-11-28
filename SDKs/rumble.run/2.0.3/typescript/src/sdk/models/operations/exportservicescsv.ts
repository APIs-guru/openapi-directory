import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportServicesCsvQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportServicesCsvSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportServicesCsvRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExportServicesCsvQueryParams;

  @SpeakeasyMetadata()
  security: ExportServicesCsvSecurity;
}


export class ExportServicesCsvResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  exportServicesCsv200TextCsvBinaryString?: Uint8Array;
}
