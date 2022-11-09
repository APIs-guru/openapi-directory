import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * AssetReportRemoveRequest defines the request schema for `/asset_report/remove`
**/
export declare class AssetReportRemoveRequest extends SpeakeasyBase {
    assetReportToken: string;
    clientId?: string;
    secret?: string;
}
