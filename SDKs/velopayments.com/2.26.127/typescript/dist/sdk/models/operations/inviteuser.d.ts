import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InviteUserRequest extends SpeakeasyBase {
    request: shared.InviteUserRequest;
}
export declare class InviteUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse409?: any;
    inlineResponse412?: any;
}
