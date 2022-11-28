import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCustomLogoPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class CreateCustomLogoSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateCustomLogoRequest extends SpeakeasyBase {
    pathParams: CreateCustomLogoPathParams;
    security: CreateCustomLogoSecurity;
}
export declare class CreateCustomLogoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    picture?: shared.Picture;
}
