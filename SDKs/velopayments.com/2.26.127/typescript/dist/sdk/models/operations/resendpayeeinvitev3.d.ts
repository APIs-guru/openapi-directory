import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResendPayeeInviteV3PathParams extends SpeakeasyBase {
    payeeId: string;
}
export declare class ResendPayeeInviteV3Request extends SpeakeasyBase {
    pathParams: ResendPayeeInviteV3PathParams;
    request: shared.InvitePayeeRequest;
}
export declare class ResendPayeeInviteV3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
    inlineResponse409?: any;
}
