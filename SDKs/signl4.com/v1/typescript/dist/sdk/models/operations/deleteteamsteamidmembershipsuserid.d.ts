import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTeamsTeamIdMembershipsUserIdPathParams extends SpeakeasyBase {
    teamId: string;
    userId: string;
}
export declare class DeleteTeamsTeamIdMembershipsUserIdQueryParams extends SpeakeasyBase {
    requesterUserId?: string;
}
export declare class DeleteTeamsTeamIdMembershipsUserIdRequest extends SpeakeasyBase {
    pathParams: DeleteTeamsTeamIdMembershipsUserIdPathParams;
    queryParams: DeleteTeamsTeamIdMembershipsUserIdQueryParams;
}
export declare class DeleteTeamsTeamIdMembershipsUserIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    deleteTeamsTeamIdMembershipsUserId200ApplicationJsonString?: string;
    deleteTeamsTeamIdMembershipsUserId200TextJsonString?: string;
    deleteTeamsTeamIdMembershipsUserId200TextPlainString?: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
