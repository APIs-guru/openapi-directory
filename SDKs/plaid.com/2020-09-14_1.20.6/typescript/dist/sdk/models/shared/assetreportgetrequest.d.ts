import { SpeakeasyBase } from "../../../internal/utils";
/**
 * AssetReportGetRequest defines the request schema for `/asset_report/get`
**/
export declare class AssetReportGetRequest extends SpeakeasyBase {
    assetReportToken: string;
    clientId?: string;
    includeInsights?: boolean;
    secret?: string;
}
