import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMembersHistoryQueryParams extends SpeakeasyBase {
    ids?: number[];
}
export declare class GetApiMembersHistoryRequest extends SpeakeasyBase {
    queryParams: GetApiMembersHistoryQueryParams;
}
export declare class GetApiMembersHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    memberHistoryItems?: shared.MemberHistoryItem[];
    statusCode: number;
}
