import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEBRANDREGISTRATIONS_SERVERS: string[];
export declare class UpdateBrandRegistrationsPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateBrandRegistrationsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateBrandRegistrationsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateBrandRegistrationsPathParams;
    security: UpdateBrandRegistrationsSecurity;
}
export declare class UpdateBrandRegistrationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1BrandRegistrations?: shared.MessagingV1BrandRegistrations;
}
