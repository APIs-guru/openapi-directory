import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTeamsTeamIdProfilePathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class PutTeamsTeamIdProfileRequests extends SpeakeasyBase {
    teamProfile?: shared.TeamProfile;
    teamProfile1?: shared.TeamProfile;
    teamProfile2?: shared.TeamProfile;
    teamProfile3?: shared.TeamProfile;
}
export declare class PutTeamsTeamIdProfileRequest extends SpeakeasyBase {
    pathParams: PutTeamsTeamIdProfilePathParams;
    request?: PutTeamsTeamIdProfileRequests;
}
export declare class PutTeamsTeamIdProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    teamInfo?: shared.TeamInfo;
}
