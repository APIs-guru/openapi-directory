import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayeesInvitationStatusV4PathParams extends SpeakeasyBase {
    payorId: string;
}
export declare class GetPayeesInvitationStatusV4QueryParams extends SpeakeasyBase {
    invitationStatus?: shared.InvitationStatusEnum;
    page?: number;
    pageSize?: number;
    payeeId?: string;
}
export declare class GetPayeesInvitationStatusV4Request extends SpeakeasyBase {
    pathParams: GetPayeesInvitationStatusV4PathParams;
    queryParams: GetPayeesInvitationStatusV4QueryParams;
}
export declare class GetPayeesInvitationStatusV4Response extends SpeakeasyBase {
    contentType: string;
    pagedPayeeInvitationStatusResponse2?: shared.PagedPayeeInvitationStatusResponse2;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
