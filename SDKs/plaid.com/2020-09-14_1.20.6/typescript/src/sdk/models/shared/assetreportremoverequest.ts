import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssetReportRemoveRequest
/** 
 * AssetReportRemoveRequest defines the request schema for `/asset_report/remove`
**/
export class AssetReportRemoveRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_report_token" })
  assetReportToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
