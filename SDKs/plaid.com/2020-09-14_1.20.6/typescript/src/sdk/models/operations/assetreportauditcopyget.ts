import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssetReportAuditCopyGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssetReportAuditCopyGetRequest;
}


export class AssetReportAuditCopyGetResponse extends SpeakeasyBase {
  @Metadata()
  assetReportGetResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
