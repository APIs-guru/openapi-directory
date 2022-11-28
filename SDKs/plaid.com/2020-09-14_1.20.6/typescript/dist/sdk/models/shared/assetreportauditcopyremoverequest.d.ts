import { SpeakeasyBase } from "../../../internal/utils";
/**
 * AssetReportAuditCopyRemoveRequest defines the request schema for `/asset_report/audit_copy/remove`
**/
export declare class AssetReportAuditCopyRemoveRequest extends SpeakeasyBase {
    auditCopyToken: string;
    clientId?: string;
    secret?: string;
}
