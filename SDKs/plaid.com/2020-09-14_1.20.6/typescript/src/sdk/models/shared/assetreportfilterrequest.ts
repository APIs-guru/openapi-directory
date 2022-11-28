import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssetReportFilterRequest
/** 
 * AssetReportFilterRequest defines the request schema for `/asset_report/filter`
**/
export class AssetReportFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_ids_to_exclude" })
  accountIdsToExclude: string[];

  @SpeakeasyMetadata({ data: "json, name=asset_report_token" })
  assetReportToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
