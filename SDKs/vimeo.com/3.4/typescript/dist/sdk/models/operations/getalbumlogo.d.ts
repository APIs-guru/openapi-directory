import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlbumLogoPathParams extends SpeakeasyBase {
    albumId: number;
    logoId: number;
    userId: number;
}
export declare class GetAlbumLogoRequest extends SpeakeasyBase {
    pathParams: GetAlbumLogoPathParams;
}
export declare class GetAlbumLogoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    picture?: shared.Picture;
}
