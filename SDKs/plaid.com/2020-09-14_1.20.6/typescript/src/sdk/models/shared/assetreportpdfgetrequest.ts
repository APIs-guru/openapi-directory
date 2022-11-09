import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssetReportPdfGetRequest
/** 
 * AssetReportPDFGetRequest defines the request schema for `/asset_report/pdf/get`
**/
export class AssetReportPdfGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_report_token" })
  assetReportToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
