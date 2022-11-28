import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsTeamIdAlertSettingsPathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class GetTeamsTeamIdAlertSettingsRequest extends SpeakeasyBase {
    pathParams: GetTeamsTeamIdAlertSettingsPathParams;
}
export declare class GetTeamsTeamIdAlertSettingsResponse extends SpeakeasyBase {
    alertSettings?: shared.AlertSettings;
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
