import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssetReportGetRequest extends SpeakeasyBase {
    request: shared.AssetReportGetRequest;
}
export declare class AssetReportGetResponse extends SpeakeasyBase {
    assetReportGetResponse?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
