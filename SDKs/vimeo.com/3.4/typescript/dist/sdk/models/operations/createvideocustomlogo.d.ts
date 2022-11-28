import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateVideoCustomLogoPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class CreateVideoCustomLogoSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateVideoCustomLogoRequest extends SpeakeasyBase {
    pathParams: CreateVideoCustomLogoPathParams;
    security: CreateVideoCustomLogoSecurity;
}
export declare class CreateVideoCustomLogoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    picture?: shared.Picture;
}
