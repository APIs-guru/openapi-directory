import { SpeakeasyBase } from "../../../internal/utils";
/**
 * AssetReportFilterRequest defines the request schema for `/asset_report/filter`
**/
export declare class AssetReportFilterRequest extends SpeakeasyBase {
    accountIdsToExclude: string[];
    assetReportToken: string;
    clientId?: string;
    secret?: string;
}
