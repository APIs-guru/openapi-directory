import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AssetReportRemoveRequest extends SpeakeasyBase {
    request: shared.AssetReportRemoveRequest;
}
export declare class AssetReportRemoveResponse extends SpeakeasyBase {
    assetReportRemoveResponse?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
