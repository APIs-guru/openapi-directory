import { SpeakeasyBase } from "../../../internal/utils";
export declare class VenueApiDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class VenueApiDeleteQueryParams extends SpeakeasyBase {
    hardDelete?: boolean;
    notes?: string;
}
export declare class VenueApiDeleteRequest extends SpeakeasyBase {
    pathParams: VenueApiDeletePathParams;
    queryParams: VenueApiDeleteQueryParams;
}
export declare class VenueApiDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
