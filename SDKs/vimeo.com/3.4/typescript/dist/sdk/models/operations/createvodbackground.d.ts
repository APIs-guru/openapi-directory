import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateVodBackgroundPathParams extends SpeakeasyBase {
    ondemandId: number;
}
export declare class CreateVodBackgroundSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateVodBackgroundRequest extends SpeakeasyBase {
    pathParams: CreateVodBackgroundPathParams;
    security: CreateVodBackgroundSecurity;
}
export declare class CreateVodBackgroundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    picture?: shared.Picture;
}
