import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssetReportPdfGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssetReportPdfGetRequest;
}


export class AssetReportPdfGetResponse extends SpeakeasyBase {
  @Metadata()
  assetReportPdfGetResponse?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
