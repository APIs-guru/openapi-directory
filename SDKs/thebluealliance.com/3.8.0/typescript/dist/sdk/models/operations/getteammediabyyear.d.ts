import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamMediaByYearPathParams extends SpeakeasyBase {
    teamKey: string;
    year: number;
}
export declare class GetTeamMediaByYearHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamMediaByYearSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamMediaByYearRequest extends SpeakeasyBase {
    pathParams: GetTeamMediaByYearPathParams;
    headers: GetTeamMediaByYearHeaders;
    security: GetTeamMediaByYearSecurity;
}
export declare class GetTeamMediaByYearResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    media?: shared.Media[];
    statusCode: number;
}
