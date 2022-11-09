import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * AssetReportAuditCopyGetRequest defines the request schema for `/asset_report/audit_copy/get`
**/
export declare class AssetReportAuditCopyGetRequest extends SpeakeasyBase {
    auditCopyToken: string;
    clientId?: string;
    secret?: string;
}
