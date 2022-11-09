import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssetReportCreateRequestOptions
/** 
 * An optional object to filter `/asset_report/create` results. If provided, must be non-`null`. The optional `user` object is required for the report to be eligible for Fannie Mae's Day 1 Certainty program.
**/
export class AssetReportCreateRequestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_report_id" })
  clientReportId?: string;

  @Metadata({ data: "json, name=user" })
  user?: Map<string, any>;

  @Metadata({ data: "json, name=webhook" })
  webhook?: string;
}
