import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssetReportRemoveRequest
/** 
 * AssetReportRemoveRequest defines the request schema for `/asset_report/remove`
**/
export class AssetReportRemoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_report_token" })
  assetReportToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
