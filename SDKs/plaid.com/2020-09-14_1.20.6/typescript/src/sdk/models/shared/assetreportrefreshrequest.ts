import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetReportRefreshRequestOptions } from "./assetreportrefreshrequestoptions";



// AssetReportRefreshRequest
/** 
 * AssetReportRefreshRequest defines the request schema for `/asset_report/refresh`
**/
export class AssetReportRefreshRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_report_token" })
  assetReportToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=days_requested" })
  daysRequested?: number;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: AssetReportRefreshRequestOptions;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
