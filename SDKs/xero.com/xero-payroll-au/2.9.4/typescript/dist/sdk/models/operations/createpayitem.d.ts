import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePayItemHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class CreatePayItemSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreatePayItemRequest extends SpeakeasyBase {
    headers: CreatePayItemHeaders;
    request: shared.PayItemInput;
    security: CreatePayItemSecurity;
}
export declare class CreatePayItemResponse extends SpeakeasyBase {
    contentType: string;
    payItems?: shared.PayItems;
    statusCode: number;
}
