import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTeamsTeamIdAlertSettingsPathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class PostTeamsTeamIdAlertSettingsRequests extends SpeakeasyBase {
    alertSettings?: shared.AlertSettings;
    alertSettings1?: shared.AlertSettings;
    alertSettings2?: shared.AlertSettings;
    alertSettings3?: shared.AlertSettings;
}
export declare class PostTeamsTeamIdAlertSettingsRequest extends SpeakeasyBase {
    pathParams: PostTeamsTeamIdAlertSettingsPathParams;
    request?: PostTeamsTeamIdAlertSettingsRequests;
}
export declare class PostTeamsTeamIdAlertSettingsResponse extends SpeakeasyBase {
    alertSettings?: shared.AlertSettings;
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
