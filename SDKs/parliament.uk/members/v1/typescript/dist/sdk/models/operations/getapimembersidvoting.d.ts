import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMembersIdVotingPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiMembersIdVotingQueryParams extends SpeakeasyBase {
    house: number;
    page?: number;
}
export declare class GetApiMembersIdVotingRequest extends SpeakeasyBase {
    pathParams: GetApiMembersIdVotingPathParams;
    queryParams: GetApiMembersIdVotingQueryParams;
}
export declare class GetApiMembersIdVotingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    voteMembersServiceSearchResult?: shared.VoteMembersServiceSearchResult;
}
