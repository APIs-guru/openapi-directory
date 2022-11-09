import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AssetReportAuditCopyGetRequest extends SpeakeasyBase {
    request: shared.AssetReportAuditCopyGetRequest;
}
export declare class AssetReportAuditCopyGetResponse extends SpeakeasyBase {
    assetReportGetResponse?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
