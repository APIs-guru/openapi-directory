import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AssetReportRefreshRequest extends SpeakeasyBase {
    request: shared.AssetReportRefreshRequest;
}
export declare class AssetReportRefreshResponse extends SpeakeasyBase {
    assetReportRefreshResponse?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
