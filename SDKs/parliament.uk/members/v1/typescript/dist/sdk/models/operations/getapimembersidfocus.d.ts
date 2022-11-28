import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMembersIdFocusPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiMembersIdFocusRequest extends SpeakeasyBase {
    pathParams: GetApiMembersIdFocusPathParams;
}
export declare class GetApiMembersIdFocusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    memberFocusListItem?: shared.MemberFocusListItem;
    statusCode: number;
}
