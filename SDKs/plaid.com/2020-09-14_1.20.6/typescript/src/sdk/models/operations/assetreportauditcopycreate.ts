import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AssetReportAuditCopyCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AssetReportAuditCopyCreateRequest;
}


export class AssetReportAuditCopyCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assetReportAuditCopyCreateResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
