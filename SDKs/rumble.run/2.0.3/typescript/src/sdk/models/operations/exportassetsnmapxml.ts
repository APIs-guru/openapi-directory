import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportAssetsNmapXmlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportAssetsNmapXmlSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportAssetsNmapXmlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExportAssetsNmapXmlQueryParams;

  @SpeakeasyMetadata()
  security: ExportAssetsNmapXmlSecurity;
}


export class ExportAssetsNmapXmlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  exportAssetsNmapXml200TextXmlBinaryString?: Uint8Array;
}
