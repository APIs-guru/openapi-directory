import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTeamsTeamIdMembershipsUserIdPathParams extends SpeakeasyBase {
    teamId: string;
    userId: string;
}
export declare class PutTeamsTeamIdMembershipsUserIdQueryParams extends SpeakeasyBase {
    requesterUserId?: string;
}
export declare class PutTeamsTeamIdMembershipsUserIdRequestsInput extends SpeakeasyBase {
    userMembership?: shared.UserMembershipInput;
    userMembership1?: shared.UserMembershipInput;
    userMembership2?: shared.UserMembershipInput;
    userMembership3?: shared.UserMembershipInput;
}
export declare class PutTeamsTeamIdMembershipsUserIdRequest extends SpeakeasyBase {
    pathParams: PutTeamsTeamIdMembershipsUserIdPathParams;
    queryParams: PutTeamsTeamIdMembershipsUserIdQueryParams;
    request?: PutTeamsTeamIdMembershipsUserIdRequestsInput;
}
export declare class PutTeamsTeamIdMembershipsUserIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    userInfo?: shared.UserInfo;
}
