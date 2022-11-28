import { SpeakeasyBase } from "../../../internal/utils";
/**
 * AssetReportAuditCopyCreateRequest defines the request schema for `/asset_report/audit_copy/get`
**/
export declare class AssetReportAuditCopyCreateRequest extends SpeakeasyBase {
    assetReportToken: string;
    auditorId: string;
    clientId?: string;
    secret?: string;
}
