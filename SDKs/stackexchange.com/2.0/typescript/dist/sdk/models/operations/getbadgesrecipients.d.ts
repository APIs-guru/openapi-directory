import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBadgesRecipientsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    page?: number;
    pagesize?: number;
    site: string;
    todate?: number;
}
export declare class GetBadgesRecipientsRequest extends SpeakeasyBase {
    queryParams: GetBadgesRecipientsQueryParams;
}
export declare class GetBadgesRecipientsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
