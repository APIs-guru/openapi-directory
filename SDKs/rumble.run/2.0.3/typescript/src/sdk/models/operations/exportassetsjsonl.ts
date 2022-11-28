import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportAssetsJsonlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportAssetsJsonlSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportAssetsJsonlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExportAssetsJsonlQueryParams;

  @SpeakeasyMetadata()
  security: ExportAssetsJsonlSecurity;
}


export class ExportAssetsJsonlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  exportAssetsJsonl200ApplicationJsonBinaryString?: Uint8Array;
}
