import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateAliasQueryParams extends SpeakeasyBase {
    aliasName?: string;
    domainName?: string;
}
export declare class CreateAliasSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class CreateAliasRequest extends SpeakeasyBase {
    queryParams: CreateAliasQueryParams;
    request: shared.CreateAliasModel;
    security: CreateAliasSecurity;
}
export declare class CreateAliasResponse extends SpeakeasyBase {
    contentType: string;
    createAliasResponseModel?: shared.CreateAliasResponseModel;
    statusCode: number;
}
