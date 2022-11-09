import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ExportAssetsNmapXmlQueryParams extends SpeakeasyBase {
    search?: string;
}
export declare class ExportAssetsNmapXmlSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ExportAssetsNmapXmlRequest extends SpeakeasyBase {
    queryParams: ExportAssetsNmapXmlQueryParams;
    security: ExportAssetsNmapXmlSecurity;
}
export declare class ExportAssetsNmapXmlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    exportAssetsNmapXml200TextXmlBinaryString?: Uint8Array;
}
