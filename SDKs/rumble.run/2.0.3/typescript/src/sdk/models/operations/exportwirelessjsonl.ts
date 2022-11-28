import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportWirelessJsonlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportWirelessJsonlSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportWirelessJsonlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExportWirelessJsonlQueryParams;

  @SpeakeasyMetadata()
  security: ExportWirelessJsonlSecurity;
}


export class ExportWirelessJsonlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  exportWirelessJsonl200ApplicationJsonBinaryString?: Uint8Array;
}
