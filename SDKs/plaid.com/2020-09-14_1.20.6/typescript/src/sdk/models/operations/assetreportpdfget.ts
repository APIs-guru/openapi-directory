import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AssetReportPdfGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AssetReportPdfGetRequest;
}


export class AssetReportPdfGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assetReportPdfGetResponse?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
