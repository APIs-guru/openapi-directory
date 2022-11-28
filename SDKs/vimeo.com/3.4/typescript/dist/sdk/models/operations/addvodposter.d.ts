import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVodPosterPathParams extends SpeakeasyBase {
    ondemandId: number;
}
export declare class AddVodPosterSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVodPosterRequest extends SpeakeasyBase {
    pathParams: AddVodPosterPathParams;
    security: AddVodPosterSecurity;
}
export declare class AddVodPosterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    picture?: shared.Picture;
}
