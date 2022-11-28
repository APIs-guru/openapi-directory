import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserDetailsUpdatePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UserDetailsUpdateRequest extends SpeakeasyBase {
    pathParams: UserDetailsUpdatePathParams;
    request: shared.UserDetailsUpdateRequest;
}
export declare class UserDetailsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
    inlineResponse409?: any;
}
