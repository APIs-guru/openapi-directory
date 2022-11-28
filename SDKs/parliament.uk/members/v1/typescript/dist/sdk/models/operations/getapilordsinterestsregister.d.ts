import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiLordsInterestsRegisterQueryParams extends SpeakeasyBase {
    includeDeleted?: boolean;
    page?: number;
    searchTerm?: string;
}
export declare class GetApiLordsInterestsRegisterRequest extends SpeakeasyBase {
    queryParams: GetApiLordsInterestsRegisterQueryParams;
}
export declare class GetApiLordsInterestsRegisterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    membersInterestsMembersServiceSearchResult?: shared.MembersInterestsMembersServiceSearchResult;
    statusCode: number;
}
