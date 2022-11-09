import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An optional object to filter `/asset_report/create` results. If provided, must be non-`null`. The optional `user` object is required for the report to be eligible for Fannie Mae's Day 1 Certainty program.
**/
export declare class AssetReportCreateRequestOptions extends SpeakeasyBase {
    clientReportId?: string;
    user?: Map<string, any>;
    webhook?: string;
}
