import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePictureAlt1PathParams extends SpeakeasyBase {
    portraitsetId: number;
}
export declare class DeletePictureAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeletePictureAlt1Request extends SpeakeasyBase {
    pathParams: DeletePictureAlt1PathParams;
    security: DeletePictureAlt1Security;
}
export declare class DeletePictureAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
