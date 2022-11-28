import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssetReportAuditCopyGetRequest
/** 
 * AssetReportAuditCopyGetRequest defines the request schema for `/asset_report/audit_copy/get`
**/
export class AssetReportAuditCopyGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audit_copy_token" })
  auditCopyToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
