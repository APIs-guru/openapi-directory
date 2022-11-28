import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsTeamIdSetupProgressPathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class GetTeamsTeamIdSetupProgressRequest extends SpeakeasyBase {
    pathParams: GetTeamsTeamIdSetupProgressPathParams;
}
export declare class GetTeamsTeamIdSetupProgressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    teamSetupProgress?: shared.TeamSetupProgress;
}
