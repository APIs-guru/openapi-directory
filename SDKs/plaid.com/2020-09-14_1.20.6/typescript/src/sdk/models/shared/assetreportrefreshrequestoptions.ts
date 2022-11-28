import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssetReportRefreshRequestOptions
/** 
 * An optional object to filter `/asset_report/refresh` results. If provided, cannot be `null`. If not specified, the `options` from the original call to `/asset_report/create` will be used.
**/
export class AssetReportRefreshRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_report_id" })
  clientReportId?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook?: string;
}
