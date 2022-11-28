import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListMediaServerList: readonly ["https://api.twilio.com"];
export declare class ListMediaPathParams extends SpeakeasyBase {
    accountSid: string;
    messageSid: string;
}
export declare class ListMediaQueryParams extends SpeakeasyBase {
    dateCreated?: Date;
    dateCreatedLessThan?: Date;
    dateCreatedGreaterThan?: Date;
    pageSize?: number;
}
export declare class ListMediaSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListMediaListMediaResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    mediaList?: shared.ApiV2010AccountMessageMedia[];
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListMediaRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListMediaPathParams;
    queryParams: ListMediaQueryParams;
    security: ListMediaSecurity;
}
export declare class ListMediaResponse extends SpeakeasyBase {
    contentType: string;
    listMediaResponse?: ListMediaListMediaResponse;
    statusCode: number;
}
