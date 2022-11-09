import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssetReportFilterRequest
/** 
 * AssetReportFilterRequest defines the request schema for `/asset_report/filter`
**/
export class AssetReportFilterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_ids_to_exclude" })
  accountIdsToExclude: string[];

  @Metadata({ data: "json, name=asset_report_token" })
  assetReportToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
