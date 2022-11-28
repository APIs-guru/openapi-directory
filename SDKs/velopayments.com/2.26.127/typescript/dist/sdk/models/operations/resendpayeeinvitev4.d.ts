import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResendPayeeInviteV4PathParams extends SpeakeasyBase {
    payeeId: string;
}
export declare class ResendPayeeInviteV4Request extends SpeakeasyBase {
    pathParams: ResendPayeeInviteV4PathParams;
    request: shared.InvitePayeeRequest2;
}
export declare class ResendPayeeInviteV4Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
    inlineResponse409?: any;
}
