import { SpeakeasyBase } from "../../../internal/utils";
export declare class AlbumApiDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class AlbumApiDeleteQueryParams extends SpeakeasyBase {
    notes?: string;
}
export declare class AlbumApiDeleteRequest extends SpeakeasyBase {
    pathParams: AlbumApiDeletePathParams;
    queryParams: AlbumApiDeleteQueryParams;
}
export declare class AlbumApiDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
