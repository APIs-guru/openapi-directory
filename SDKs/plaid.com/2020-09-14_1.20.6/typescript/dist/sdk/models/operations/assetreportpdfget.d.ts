import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AssetReportPdfGetRequest extends SpeakeasyBase {
    request: shared.AssetReportPdfGetRequest;
}
export declare class AssetReportPdfGetResponse extends SpeakeasyBase {
    assetReportPdfGetResponse?: Uint8Array;
    contentType: string;
    statusCode: number;
}
