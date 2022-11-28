import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiLocationConstituencyIdElectionResultsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiLocationConstituencyIdElectionResultsRequest extends SpeakeasyBase {
    pathParams: GetApiLocationConstituencyIdElectionResultsPathParams;
}
export declare class GetApiLocationConstituencyIdElectionResultsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    electionResultListItem?: shared.ElectionResultListItem;
    statusCode: number;
}
