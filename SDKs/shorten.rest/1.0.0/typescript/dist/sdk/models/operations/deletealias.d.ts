import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAliasQueryParams extends SpeakeasyBase {
    aliasName: string;
    domainName?: string;
}
export declare class DeleteAliasSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DeleteAliasRequest extends SpeakeasyBase {
    queryParams: DeleteAliasQueryParams;
    security: DeleteAliasSecurity;
}
export declare class DeleteAliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
