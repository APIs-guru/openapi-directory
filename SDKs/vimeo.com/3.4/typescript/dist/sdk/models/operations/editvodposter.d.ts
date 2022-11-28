import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditVodPosterPathParams extends SpeakeasyBase {
    ondemandId: number;
    posterId: number;
}
export declare class EditVodPosterRequestBody extends SpeakeasyBase {
    active?: boolean;
}
export declare class EditVodPosterSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class EditVodPosterRequest extends SpeakeasyBase {
    pathParams: EditVodPosterPathParams;
    request?: EditVodPosterRequestBody;
    security: EditVodPosterSecurity;
}
export declare class EditVodPosterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    picture?: shared.Picture;
}
