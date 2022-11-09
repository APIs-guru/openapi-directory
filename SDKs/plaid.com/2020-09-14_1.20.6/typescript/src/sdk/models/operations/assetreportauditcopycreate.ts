import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssetReportAuditCopyCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssetReportAuditCopyCreateRequest;
}


export class AssetReportAuditCopyCreateResponse extends SpeakeasyBase {
  @Metadata()
  assetReportAuditCopyCreateResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
