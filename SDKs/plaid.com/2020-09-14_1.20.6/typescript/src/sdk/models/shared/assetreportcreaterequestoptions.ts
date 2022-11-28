import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssetReportCreateRequestOptions
/** 
 * An optional object to filter `/asset_report/create` results. If provided, must be non-`null`. The optional `user` object is required for the report to be eligible for Fannie Mae's Day 1 Certainty program.
**/
export class AssetReportCreateRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_report_id" })
  clientReportId?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook?: string;
}
