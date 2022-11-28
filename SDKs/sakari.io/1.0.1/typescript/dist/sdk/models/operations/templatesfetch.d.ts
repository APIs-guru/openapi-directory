import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TemplatesFetchPathParams extends SpeakeasyBase {
    accountId: string;
    templateId: string;
}
export declare class TemplatesFetchSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class TemplatesFetchRequest extends SpeakeasyBase {
    pathParams: TemplatesFetchPathParams;
    security: TemplatesFetchSecurity;
}
export declare class TemplatesFetchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    templateResponse?: shared.TemplateResponse;
}
