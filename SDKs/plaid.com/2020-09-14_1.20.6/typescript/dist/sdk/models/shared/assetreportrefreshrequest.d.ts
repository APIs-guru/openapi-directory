import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetReportRefreshRequestOptions } from "./assetreportrefreshrequestoptions";
/**
 * AssetReportRefreshRequest defines the request schema for `/asset_report/refresh`
**/
export declare class AssetReportRefreshRequest extends SpeakeasyBase {
    assetReportToken: string;
    clientId?: string;
    daysRequested?: number;
    options?: AssetReportRefreshRequestOptions;
    secret?: string;
}
