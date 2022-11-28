import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlbumLogosPathParams extends SpeakeasyBase {
    albumId: number;
    userId: number;
}
export declare class GetAlbumLogosQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetAlbumLogosRequest extends SpeakeasyBase {
    pathParams: GetAlbumLogosPathParams;
    queryParams: GetAlbumLogosQueryParams;
}
export declare class GetAlbumLogosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    pictures?: shared.Picture[];
}
