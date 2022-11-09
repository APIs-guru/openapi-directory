import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetInboxHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetInboxSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetInboxRequest extends SpeakeasyBase {
    headers: GetInboxHeaders;
    security: GetInboxSecurity;
}
export declare class GetInboxResponse extends SpeakeasyBase {
    contentType: string;
    folder?: any;
    statusCode: number;
}
