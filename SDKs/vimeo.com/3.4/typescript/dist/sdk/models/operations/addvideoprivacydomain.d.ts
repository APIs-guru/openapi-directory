import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoPrivacyDomainPathParams extends SpeakeasyBase {
    domain: string;
    videoId: number;
}
export declare class AddVideoPrivacyDomainSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideoPrivacyDomainRequest extends SpeakeasyBase {
    pathParams: AddVideoPrivacyDomainPathParams;
    security: AddVideoPrivacyDomainSecurity;
}
export declare class AddVideoPrivacyDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
