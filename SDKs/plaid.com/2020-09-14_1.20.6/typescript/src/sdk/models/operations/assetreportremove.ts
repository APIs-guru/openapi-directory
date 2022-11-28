import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AssetReportRemoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AssetReportRemoveRequest;
}


export class AssetReportRemoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assetReportRemoveResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
