import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoPrivacyDomainPathParams extends SpeakeasyBase {
    domain: string;
    videoId: number;
}
export declare class DeleteVideoPrivacyDomainSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVideoPrivacyDomainRequest extends SpeakeasyBase {
    pathParams: DeleteVideoPrivacyDomainPathParams;
    security: DeleteVideoPrivacyDomainSecurity;
}
export declare class DeleteVideoPrivacyDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
