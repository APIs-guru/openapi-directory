import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBadgesIdsRecipientsPathParams extends SpeakeasyBase {
    ids: string;
}
export declare class GetBadgesIdsRecipientsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    page?: number;
    pagesize?: number;
    site: string;
    todate?: number;
}
export declare class GetBadgesIdsRecipientsRequest extends SpeakeasyBase {
    pathParams: GetBadgesIdsRecipientsPathParams;
    queryParams: GetBadgesIdsRecipientsQueryParams;
}
export declare class GetBadgesIdsRecipientsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
