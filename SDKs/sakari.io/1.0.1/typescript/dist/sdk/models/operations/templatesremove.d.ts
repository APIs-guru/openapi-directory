import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TemplatesRemovePathParams extends SpeakeasyBase {
    accountId: string;
    templateId: string;
}
export declare class TemplatesRemoveSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class TemplatesRemove200ApplicationJson extends SpeakeasyBase {
    success?: boolean;
}
export declare class TemplatesRemoveRequest extends SpeakeasyBase {
    pathParams: TemplatesRemovePathParams;
    security: TemplatesRemoveSecurity;
}
export declare class TemplatesRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    templatesRemove200ApplicationJsonObject?: TemplatesRemove200ApplicationJson;
}
