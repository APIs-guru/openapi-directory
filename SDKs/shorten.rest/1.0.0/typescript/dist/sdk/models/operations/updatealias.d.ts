import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateAliasQueryParams extends SpeakeasyBase {
    aliasName: string;
    domainName?: string;
}
export declare class UpdateAliasSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdateAliasRequest extends SpeakeasyBase {
    queryParams: UpdateAliasQueryParams;
    request: shared.CreateAliasModel;
    security: UpdateAliasSecurity;
}
export declare class UpdateAliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
