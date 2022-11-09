import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssetReportRefreshRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssetReportRefreshRequest;
}


export class AssetReportRefreshResponse extends SpeakeasyBase {
  @Metadata()
  assetReportRefreshResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
