import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMembersIdLatestElectionResultPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiMembersIdLatestElectionResultRequest extends SpeakeasyBase {
    pathParams: GetApiMembersIdLatestElectionResultPathParams;
}
export declare class GetApiMembersIdLatestElectionResultResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    electionResultItem?: shared.ElectionResultItem;
    statusCode: number;
}
