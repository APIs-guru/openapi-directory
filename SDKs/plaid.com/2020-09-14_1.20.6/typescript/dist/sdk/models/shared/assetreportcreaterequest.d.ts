import { SpeakeasyBase } from "../../../internal/utils";
import { AssetReportCreateRequestOptions } from "./assetreportcreaterequestoptions";
/**
 * AssetReportCreateRequest defines the request schema for `/asset_report/create`
**/
export declare class AssetReportCreateRequest extends SpeakeasyBase {
    accessTokens: string[];
    clientId?: string;
    daysRequested: number;
    options?: AssetReportCreateRequestOptions;
    secret?: string;
}
