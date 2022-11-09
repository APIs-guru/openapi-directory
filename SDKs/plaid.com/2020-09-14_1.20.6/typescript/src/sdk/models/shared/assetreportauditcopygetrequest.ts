import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssetReportAuditCopyGetRequest
/** 
 * AssetReportAuditCopyGetRequest defines the request schema for `/asset_report/audit_copy/get`
**/
export class AssetReportAuditCopyGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=audit_copy_token" })
  auditCopyToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
