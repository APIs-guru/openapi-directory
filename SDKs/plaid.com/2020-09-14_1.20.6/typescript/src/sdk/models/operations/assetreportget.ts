import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssetReportGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssetReportGetRequest;
}


export class AssetReportGetResponse extends SpeakeasyBase {
  @Metadata()
  assetReportGetResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
