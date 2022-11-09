import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssetReportAuditCopyRemoveRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssetReportAuditCopyRemoveRequest;
}


export class AssetReportAuditCopyRemoveResponse extends SpeakeasyBase {
  @Metadata()
  assetReportAuditCopyRemoveResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
