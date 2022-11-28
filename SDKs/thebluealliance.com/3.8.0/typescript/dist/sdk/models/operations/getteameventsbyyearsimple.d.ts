import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamEventsByYearSimplePathParams extends SpeakeasyBase {
    teamKey: string;
    year: number;
}
export declare class GetTeamEventsByYearSimpleHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamEventsByYearSimpleSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamEventsByYearSimpleRequest extends SpeakeasyBase {
    pathParams: GetTeamEventsByYearSimplePathParams;
    headers: GetTeamEventsByYearSimpleHeaders;
    security: GetTeamEventsByYearSimpleSecurity;
}
export declare class GetTeamEventsByYearSimpleResponse extends SpeakeasyBase {
    contentType: string;
    eventSimples?: shared.EventSimple[];
    headers: Map<string, string[]>;
    statusCode: number;
}
