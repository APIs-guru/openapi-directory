import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssetReportCreateRequest extends SpeakeasyBase {
    request: shared.AssetReportCreateRequest;
}
export declare class AssetReportCreateResponse extends SpeakeasyBase {
    assetReportCreateResponse?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
