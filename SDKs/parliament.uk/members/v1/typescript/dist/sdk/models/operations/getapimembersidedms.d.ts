import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMembersIdEdmsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiMembersIdEdmsQueryParams extends SpeakeasyBase {
    page?: number;
}
export declare class GetApiMembersIdEdmsRequest extends SpeakeasyBase {
    pathParams: GetApiMembersIdEdmsPathParams;
    queryParams: GetApiMembersIdEdmsQueryParams;
}
export declare class GetApiMembersIdEdmsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    earlyDayMotionMembersServiceSearchResult?: shared.EarlyDayMotionMembersServiceSearchResult;
    statusCode: number;
}
