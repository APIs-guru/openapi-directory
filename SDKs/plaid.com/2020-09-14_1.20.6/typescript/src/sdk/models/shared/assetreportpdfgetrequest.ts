import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssetReportPdfGetRequest
/** 
 * AssetReportPDFGetRequest defines the request schema for `/asset_report/pdf/get`
**/
export class AssetReportPdfGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_report_token" })
  assetReportToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
