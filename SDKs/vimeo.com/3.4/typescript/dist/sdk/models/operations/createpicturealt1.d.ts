import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePictureAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreatePictureAlt1Request extends SpeakeasyBase {
    security: CreatePictureAlt1Security;
}
export declare class CreatePictureAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    picture?: shared.Picture;
}
