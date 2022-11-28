import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AssetReportAuditCopyRemoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AssetReportAuditCopyRemoveRequest;
}


export class AssetReportAuditCopyRemoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assetReportAuditCopyRemoveResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
