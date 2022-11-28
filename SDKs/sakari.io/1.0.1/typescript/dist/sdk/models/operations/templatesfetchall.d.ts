import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TemplatesFetchAllPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class TemplatesFetchAllQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
}
export declare class TemplatesFetchAllSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class TemplatesFetchAllRequest extends SpeakeasyBase {
    pathParams: TemplatesFetchAllPathParams;
    queryParams: TemplatesFetchAllQueryParams;
    security: TemplatesFetchAllSecurity;
}
export declare class TemplatesFetchAllResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    templatesResponse?: shared.TemplatesResponse;
}
