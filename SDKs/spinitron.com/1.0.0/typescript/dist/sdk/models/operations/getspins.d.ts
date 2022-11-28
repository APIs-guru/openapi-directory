import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSpinsQueryParams extends SpeakeasyBase {
    count?: number;
    end?: Date;
    expand?: string[];
    fields?: string[];
    page?: number;
    playlistId?: number;
    showId?: number;
    start?: Date;
}
export declare class GetSpins200ApplicationJsonLinks extends SpeakeasyBase {
    self?: shared.Link;
}
export declare class GetSpins200ApplicationJson extends SpeakeasyBase {
    links?: GetSpins200ApplicationJsonLinks;
    meta?: shared.Pagination;
    items?: shared.Spin[];
}
export declare class GetSpinsRequest extends SpeakeasyBase {
    queryParams: GetSpinsQueryParams;
}
export declare class GetSpinsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getSpins200ApplicationJsonObject?: GetSpins200ApplicationJson;
    statusCode: number;
}
