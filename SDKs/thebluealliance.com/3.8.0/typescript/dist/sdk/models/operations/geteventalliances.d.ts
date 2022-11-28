import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventAlliancesPathParams extends SpeakeasyBase {
    eventKey: string;
}
export declare class GetEventAlliancesHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventAlliancesSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventAlliancesRequest extends SpeakeasyBase {
    pathParams: GetEventAlliancesPathParams;
    headers: GetEventAlliancesHeaders;
    security: GetEventAlliancesSecurity;
}
export declare class GetEventAlliancesResponse extends SpeakeasyBase {
    contentType: string;
    eliminationAlliances?: shared.EliminationAlliance[];
    headers: Map<string, string[]>;
    statusCode: number;
}
