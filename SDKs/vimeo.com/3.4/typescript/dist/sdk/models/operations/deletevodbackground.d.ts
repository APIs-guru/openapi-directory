import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVodBackgroundPathParams extends SpeakeasyBase {
    backgroundId: number;
    ondemandId: number;
}
export declare class DeleteVodBackgroundSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVodBackgroundRequest extends SpeakeasyBase {
    pathParams: DeleteVodBackgroundPathParams;
    security: DeleteVodBackgroundSecurity;
}
export declare class DeleteVodBackgroundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    picture?: shared.Picture;
}
