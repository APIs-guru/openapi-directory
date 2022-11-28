import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiLocationConstituencyIdElectionResultElectionIdPathParams extends SpeakeasyBase {
    electionId: number;
    id: number;
}
export declare class GetApiLocationConstituencyIdElectionResultElectionIdRequest extends SpeakeasyBase {
    pathParams: GetApiLocationConstituencyIdElectionResultElectionIdPathParams;
}
export declare class GetApiLocationConstituencyIdElectionResultElectionIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    electionResultItem?: shared.ElectionResultItem;
    statusCode: number;
}
