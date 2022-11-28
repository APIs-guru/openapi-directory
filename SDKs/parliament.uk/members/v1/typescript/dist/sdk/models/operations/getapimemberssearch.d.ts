import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMembersSearchQueryParams extends SpeakeasyBase {
    constituencyId?: number;
    experience?: string;
    gender?: string;
    house?: number;
    isCurrentMember?: boolean;
    isEligible?: boolean;
    location?: string;
    membershipEndedMembershipEndReasonIds?: number[];
    membershipEndedMembershipEndedSince?: Date;
    membershipInDateRangeWasMemberOfHouse?: number;
    membershipInDateRangeWasMemberOnOrAfter?: Date;
    membershipInDateRangeWasMemberOnOrBefore?: Date;
    membershipStartedSince?: Date;
    name?: string;
    nameStartsWith?: string;
    partyId?: number;
    policyInterestId?: number;
    postTitle?: string;
    skip?: number;
    take?: number;
}
export declare class GetApiMembersSearchRequest extends SpeakeasyBase {
    queryParams: GetApiMembersSearchQueryParams;
}
export declare class GetApiMembersSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    memberMembersServiceSearchResult?: shared.MemberMembersServiceSearchResult;
    statusCode: number;
}
