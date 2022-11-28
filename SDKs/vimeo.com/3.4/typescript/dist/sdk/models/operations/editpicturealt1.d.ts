import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditPictureAlt1PathParams extends SpeakeasyBase {
    portraitsetId: number;
}
export declare class EditPictureAlt1RequestBody extends SpeakeasyBase {
    active?: boolean;
}
export declare class EditPictureAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class EditPictureAlt1Request extends SpeakeasyBase {
    pathParams: EditPictureAlt1PathParams;
    request?: EditPictureAlt1RequestBody;
    security: EditPictureAlt1Security;
}
export declare class EditPictureAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    picture?: shared.Picture;
}
