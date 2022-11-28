import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCustomLogoAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateCustomLogoAlt1Request extends SpeakeasyBase {
    security: CreateCustomLogoAlt1Security;
}
export declare class CreateCustomLogoAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    picture?: shared.Picture;
}
