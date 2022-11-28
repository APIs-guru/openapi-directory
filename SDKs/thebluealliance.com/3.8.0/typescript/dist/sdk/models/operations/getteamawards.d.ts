import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamAwardsPathParams extends SpeakeasyBase {
    teamKey: string;
}
export declare class GetTeamAwardsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamAwardsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamAwardsRequest extends SpeakeasyBase {
    pathParams: GetTeamAwardsPathParams;
    headers: GetTeamAwardsHeaders;
    security: GetTeamAwardsSecurity;
}
export declare class GetTeamAwardsResponse extends SpeakeasyBase {
    awards?: shared.Award[];
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
