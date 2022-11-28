import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssetReportAuditCopyCreateRequest
/** 
 * AssetReportAuditCopyCreateRequest defines the request schema for `/asset_report/audit_copy/get`
**/
export class AssetReportAuditCopyCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_report_token" })
  assetReportToken: string;

  @SpeakeasyMetadata({ data: "json, name=auditor_id" })
  auditorId: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
