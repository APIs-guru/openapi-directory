import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiLordsInterestsStaffQueryParams extends SpeakeasyBase {
    page?: number;
    searchTerm?: string;
}
export declare class GetApiLordsInterestsStaffRequest extends SpeakeasyBase {
    queryParams: GetApiLordsInterestsStaffQueryParams;
}
export declare class GetApiLordsInterestsStaffResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    membersStaffMembersServiceSearchResult?: shared.MembersStaffMembersServiceSearchResult;
    statusCode: number;
}
