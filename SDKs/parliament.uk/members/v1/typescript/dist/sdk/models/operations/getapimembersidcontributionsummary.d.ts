import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMembersIdContributionSummaryPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiMembersIdContributionSummaryQueryParams extends SpeakeasyBase {
    page?: number;
}
export declare class GetApiMembersIdContributionSummaryRequest extends SpeakeasyBase {
    pathParams: GetApiMembersIdContributionSummaryPathParams;
    queryParams: GetApiMembersIdContributionSummaryQueryParams;
}
export declare class GetApiMembersIdContributionSummaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    debateContributionMembersServiceSearchResult?: shared.DebateContributionMembersServiceSearchResult;
    statusCode: number;
}
