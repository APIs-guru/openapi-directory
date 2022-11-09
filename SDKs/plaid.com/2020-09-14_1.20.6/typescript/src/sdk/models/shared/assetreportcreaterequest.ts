import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetReportCreateRequestOptions } from "./assetreportcreaterequestoptions";


// AssetReportCreateRequest
/** 
 * AssetReportCreateRequest defines the request schema for `/asset_report/create`
**/
export class AssetReportCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_tokens" })
  accessTokens: string[];

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=days_requested" })
  daysRequested: number;

  @Metadata({ data: "json, name=options" })
  options?: AssetReportCreateRequestOptions;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
