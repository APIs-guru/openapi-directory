import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamYearsParticipatedPathParams extends SpeakeasyBase {
    teamKey: string;
}
export declare class GetTeamYearsParticipatedHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamYearsParticipatedSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamYearsParticipatedRequest extends SpeakeasyBase {
    pathParams: GetTeamYearsParticipatedPathParams;
    headers: GetTeamYearsParticipatedHeaders;
    security: GetTeamYearsParticipatedSecurity;
}
export declare class GetTeamYearsParticipatedResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getTeamYearsParticipated200ApplicationJsonIntegers?: number[];
}
