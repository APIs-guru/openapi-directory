import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserDetailsUpdateForSelfRequest extends SpeakeasyBase {
    request: shared.PayeeUserSelfUpdateRequest;
}
export declare class UserDetailsUpdateForSelfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse409?: any;
}
