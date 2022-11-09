import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportWirelessJsonlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportWirelessJsonlSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportWirelessJsonlRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ExportWirelessJsonlQueryParams;

  @Metadata()
  security: ExportWirelessJsonlSecurity;
}


export class ExportWirelessJsonlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  exportWirelessJsonl200ApplicationJsonBinaryString?: Uint8Array;
}
