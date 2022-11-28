import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMembersSearchHistoricalQueryParams extends SpeakeasyBase {
    dateToSearchFor?: Date;
    name?: string;
    skip?: number;
    take?: number;
}
export declare class GetApiMembersSearchHistoricalRequest extends SpeakeasyBase {
    queryParams: GetApiMembersSearchHistoricalQueryParams;
}
export declare class GetApiMembersSearchHistoricalResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    memberMembersServiceSearchResult?: shared.MemberMembersServiceSearchResult;
    statusCode: number;
}
