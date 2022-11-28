import { SpeakeasyBase } from "../../../internal/utils";
export declare class SongListApiDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class SongListApiDeleteQueryParams extends SpeakeasyBase {
    hardDelete?: boolean;
    notes?: string;
}
export declare class SongListApiDeleteRequest extends SpeakeasyBase {
    pathParams: SongListApiDeletePathParams;
    queryParams: SongListApiDeleteQueryParams;
}
export declare class SongListApiDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
