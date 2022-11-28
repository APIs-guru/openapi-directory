import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetReportCreateRequestOptions } from "./assetreportcreaterequestoptions";



// AssetReportCreateRequest
/** 
 * AssetReportCreateRequest defines the request schema for `/asset_report/create`
**/
export class AssetReportCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_tokens" })
  accessTokens: string[];

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=days_requested" })
  daysRequested: number;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: AssetReportCreateRequestOptions;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
