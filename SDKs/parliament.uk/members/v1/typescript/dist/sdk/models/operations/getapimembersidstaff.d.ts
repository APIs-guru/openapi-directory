import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMembersIdStaffPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiMembersIdStaffRequest extends SpeakeasyBase {
    pathParams: GetApiMembersIdStaffPathParams;
}
export declare class GetApiMembersIdStaffResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    staffListItem?: shared.StaffListItem;
    statusCode: number;
}
