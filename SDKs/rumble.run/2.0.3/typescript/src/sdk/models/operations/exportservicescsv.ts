import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportServicesCsvQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportServicesCsvSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportServicesCsvRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ExportServicesCsvQueryParams;

  @Metadata()
  security: ExportServicesCsvSecurity;
}


export class ExportServicesCsvResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  exportServicesCsv200TextCsvBinaryString?: Uint8Array;
}
