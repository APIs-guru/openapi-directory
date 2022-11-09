import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AssetReportFilterRequest extends SpeakeasyBase {
    request: shared.AssetReportFilterRequest;
}
export declare class AssetReportFilterResponse extends SpeakeasyBase {
    assetReportFilterResponse?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
