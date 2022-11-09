import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportAssetsNmapXmlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportAssetsNmapXmlSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportAssetsNmapXmlRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ExportAssetsNmapXmlQueryParams;

  @Metadata()
  security: ExportAssetsNmapXmlSecurity;
}


export class ExportAssetsNmapXmlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  exportAssetsNmapXml200TextXmlBinaryString?: Uint8Array;
}
