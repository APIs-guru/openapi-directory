import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAliasesQueryParams extends SpeakeasyBase {
    continueFrom?: string;
    domainName?: string;
    limit?: number;
}
export declare class GetAliasesSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetAliasesRequest extends SpeakeasyBase {
    queryParams: GetAliasesQueryParams;
    security: GetAliasesSecurity;
}
export declare class GetAliasesResponse extends SpeakeasyBase {
    contentType: string;
    getAliasesModel?: shared.GetAliasesModel;
    statusCode: number;
}
