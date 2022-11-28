import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNamePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetNameQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetNameSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetNameRequest extends SpeakeasyBase {
    pathParams: GetNamePathParams;
    queryParams: GetNameQueryParams;
    security: GetNameSecurity;
}
export declare class GetNameResponse extends SpeakeasyBase {
    contentType: string;
    entityName?: shared.EntityName;
    statusCode: number;
}
