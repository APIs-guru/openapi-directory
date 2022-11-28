import { SpeakeasyBase } from "../../../internal/utils";
export declare class SongApiDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class SongApiDeleteQueryParams extends SpeakeasyBase {
    notes?: string;
}
export declare class SongApiDeleteRequest extends SpeakeasyBase {
    pathParams: SongApiDeletePathParams;
    queryParams: SongApiDeleteQueryParams;
}
export declare class SongApiDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
