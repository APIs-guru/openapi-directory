import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsTeamIdEventSourcesPathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class GetTeamsTeamIdEventSourcesRequest extends SpeakeasyBase {
    pathParams: GetTeamsTeamIdEventSourcesPathParams;
}
export declare class GetTeamsTeamIdEventSourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    eventSourceEndpointInfos?: shared.EventSourceEndpointInfo[];
    statusCode: number;
}
