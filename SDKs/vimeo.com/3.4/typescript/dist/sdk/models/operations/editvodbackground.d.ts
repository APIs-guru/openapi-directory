import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditVodBackgroundPathParams extends SpeakeasyBase {
    backgroundId: number;
    ondemandId: number;
}
export declare class EditVodBackgroundRequestBody extends SpeakeasyBase {
    active?: boolean;
}
export declare class EditVodBackgroundSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class EditVodBackgroundRequest extends SpeakeasyBase {
    pathParams: EditVodBackgroundPathParams;
    request?: EditVodBackgroundRequestBody;
    security: EditVodBackgroundSecurity;
}
export declare class EditVodBackgroundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    picture?: shared.Picture;
}
