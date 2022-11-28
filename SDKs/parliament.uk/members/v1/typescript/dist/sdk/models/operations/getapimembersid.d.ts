import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMembersIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiMembersIdQueryParams extends SpeakeasyBase {
    detailsForDate?: Date;
}
export declare class GetApiMembersIdRequest extends SpeakeasyBase {
    pathParams: GetApiMembersIdPathParams;
    queryParams: GetApiMembersIdQueryParams;
}
export declare class GetApiMembersIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    memberItem?: shared.MemberItem;
    statusCode: number;
}
