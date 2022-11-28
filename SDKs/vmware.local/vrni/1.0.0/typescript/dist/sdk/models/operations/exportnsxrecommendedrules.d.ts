import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportNsxRecommendedRulesSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ExportNsxRecommendedRulesRequest extends SpeakeasyBase {
    request?: shared.RecommendedRulesRequest;
    security: ExportNsxRecommendedRulesSecurity;
}
export declare class ExportNsxRecommendedRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    exportNsxRecommendedRules200ApplicationOctetStreamBinaryString?: Uint8Array;
}
