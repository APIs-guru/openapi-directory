import { SpeakeasyBase } from "../../../internal/utils";
export declare class ArtistApiDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class ArtistApiDeleteQueryParams extends SpeakeasyBase {
    notes?: string;
}
export declare class ArtistApiDeleteRequest extends SpeakeasyBase {
    pathParams: ArtistApiDeletePathParams;
    queryParams: ArtistApiDeleteQueryParams;
}
export declare class ArtistApiDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
