import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAliasQueryParams extends SpeakeasyBase {
    aliasName: string;
    domainName?: string;
}
export declare class GetAliasSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetAliasRequest extends SpeakeasyBase {
    queryParams: GetAliasQueryParams;
    security: GetAliasSecurity;
}
export declare class GetAliasResponse extends SpeakeasyBase {
    aliasModel?: shared.AliasModel;
    contentType: string;
    statusCode: number;
}
