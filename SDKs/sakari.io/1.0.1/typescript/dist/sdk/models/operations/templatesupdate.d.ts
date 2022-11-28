import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TemplatesUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    templateId: string;
}
export declare class TemplatesUpdateSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class TemplatesUpdateRequest extends SpeakeasyBase {
    pathParams: TemplatesUpdatePathParams;
    security: TemplatesUpdateSecurity;
}
export declare class TemplatesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    templateResponse?: shared.TemplateResponse;
}
