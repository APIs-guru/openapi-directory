import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReleaseEventSeriesApiDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class ReleaseEventSeriesApiDeleteQueryParams extends SpeakeasyBase {
    hardDelete?: boolean;
    notes?: string;
}
export declare class ReleaseEventSeriesApiDeleteRequest extends SpeakeasyBase {
    pathParams: ReleaseEventSeriesApiDeletePathParams;
    queryParams: ReleaseEventSeriesApiDeleteQueryParams;
}
export declare class ReleaseEventSeriesApiDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
