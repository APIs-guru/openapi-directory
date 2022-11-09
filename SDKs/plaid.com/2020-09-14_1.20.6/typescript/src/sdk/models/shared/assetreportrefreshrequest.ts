import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetReportRefreshRequestOptions } from "./assetreportrefreshrequestoptions";


// AssetReportRefreshRequest
/** 
 * AssetReportRefreshRequest defines the request schema for `/asset_report/refresh`
**/
export class AssetReportRefreshRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_report_token" })
  assetReportToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=days_requested" })
  daysRequested?: number;

  @Metadata({ data: "json, name=options" })
  options?: AssetReportRefreshRequestOptions;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
