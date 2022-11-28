import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayeesInvitationStatusV3PathParams extends SpeakeasyBase {
    payorId: string;
}
export declare class GetPayeesInvitationStatusV3QueryParams extends SpeakeasyBase {
    invitationStatus?: shared.InvitationStatusEnum;
    page?: number;
    pageSize?: number;
    payeeId?: string;
}
export declare class GetPayeesInvitationStatusV3Request extends SpeakeasyBase {
    pathParams: GetPayeesInvitationStatusV3PathParams;
    queryParams: GetPayeesInvitationStatusV3QueryParams;
}
export declare class GetPayeesInvitationStatusV3Response extends SpeakeasyBase {
    contentType: string;
    pagedPayeeInvitationStatusResponse?: shared.PagedPayeeInvitationStatusResponse;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
