import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoCustomLogoPathParams extends SpeakeasyBase {
    thumbnailId: number;
    videoId: number;
}
export declare class GetVideoCustomLogoRequest extends SpeakeasyBase {
    pathParams: GetVideoCustomLogoPathParams;
}
export declare class GetVideoCustomLogoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    picture?: shared.Picture;
}
