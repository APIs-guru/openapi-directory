import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebhooksFetchAllPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class WebhooksFetchAllSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class WebhooksFetchAllRequest extends SpeakeasyBase {
    pathParams: WebhooksFetchAllPathParams;
    security: WebhooksFetchAllSecurity;
}
export declare class WebhooksFetchAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhooksResponse?: shared.WebhooksResponse;
}
