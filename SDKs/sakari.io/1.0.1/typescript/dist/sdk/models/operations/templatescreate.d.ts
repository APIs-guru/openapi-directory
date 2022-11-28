import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TemplatesCreatePathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class TemplatesCreateSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class TemplatesCreateRequest extends SpeakeasyBase {
    pathParams: TemplatesCreatePathParams;
    request?: shared.TemplateRequest;
    security: TemplatesCreateSecurity;
}
export declare class TemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    templatesResponse?: shared.TemplatesResponse;
}
