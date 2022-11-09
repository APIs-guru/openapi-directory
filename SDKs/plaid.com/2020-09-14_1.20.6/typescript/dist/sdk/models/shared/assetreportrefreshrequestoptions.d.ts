import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An optional object to filter `/asset_report/refresh` results. If provided, cannot be `null`. If not specified, the `options` from the original call to `/asset_report/create` will be used.
**/
export declare class AssetReportRefreshRequestOptions extends SpeakeasyBase {
    clientReportId?: string;
    user?: Map<string, any>;
    webhook?: string;
}
