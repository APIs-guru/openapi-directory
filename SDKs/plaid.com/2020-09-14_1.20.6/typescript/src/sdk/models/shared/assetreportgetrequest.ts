import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssetReportGetRequest
/** 
 * AssetReportGetRequest defines the request schema for `/asset_report/get`
**/
export class AssetReportGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_report_token" })
  assetReportToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=include_insights" })
  includeInsights?: boolean;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
