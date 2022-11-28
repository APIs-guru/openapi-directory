import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMembersIdContactPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiMembersIdContactRequest extends SpeakeasyBase {
    pathParams: GetApiMembersIdContactPathParams;
}
export declare class GetApiMembersIdContactResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contactInformationListItem?: shared.ContactInformationListItem;
    contentType: string;
    statusCode: number;
}
