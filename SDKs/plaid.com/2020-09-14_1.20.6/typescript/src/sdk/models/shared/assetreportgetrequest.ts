import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssetReportGetRequest
/** 
 * AssetReportGetRequest defines the request schema for `/asset_report/get`
**/
export class AssetReportGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_report_token" })
  assetReportToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=include_insights" })
  includeInsights?: boolean;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
