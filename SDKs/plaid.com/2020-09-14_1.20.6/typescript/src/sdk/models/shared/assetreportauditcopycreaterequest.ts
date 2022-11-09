import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssetReportAuditCopyCreateRequest
/** 
 * AssetReportAuditCopyCreateRequest defines the request schema for `/asset_report/audit_copy/get`
**/
export class AssetReportAuditCopyCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_report_token" })
  assetReportToken: string;

  @Metadata({ data: "json, name=auditor_id" })
  auditorId: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
