import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamEventAwardsPathParams extends SpeakeasyBase {
    eventKey: string;
    teamKey: string;
}
export declare class GetTeamEventAwardsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamEventAwardsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamEventAwardsRequest extends SpeakeasyBase {
    pathParams: GetTeamEventAwardsPathParams;
    headers: GetTeamEventAwardsHeaders;
    security: GetTeamEventAwardsSecurity;
}
export declare class GetTeamEventAwardsResponse extends SpeakeasyBase {
    awards?: shared.Award[];
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
