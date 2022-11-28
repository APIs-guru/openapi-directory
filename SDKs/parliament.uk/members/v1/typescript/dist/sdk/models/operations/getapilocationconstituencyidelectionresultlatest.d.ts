import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiLocationConstituencyIdElectionResultLatestPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiLocationConstituencyIdElectionResultLatestRequest extends SpeakeasyBase {
    pathParams: GetApiLocationConstituencyIdElectionResultLatestPathParams;
}
export declare class GetApiLocationConstituencyIdElectionResultLatestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    electionResultItem?: shared.ElectionResultItem;
    statusCode: number;
}
