import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamMediaByTagYearPathParams extends SpeakeasyBase {
    mediaTag: string;
    teamKey: string;
    year: number;
}
export declare class GetTeamMediaByTagYearHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamMediaByTagYearSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamMediaByTagYearRequest extends SpeakeasyBase {
    pathParams: GetTeamMediaByTagYearPathParams;
    headers: GetTeamMediaByTagYearHeaders;
    security: GetTeamMediaByTagYearSecurity;
}
export declare class GetTeamMediaByTagYearResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    media?: shared.Media[];
    statusCode: number;
}
