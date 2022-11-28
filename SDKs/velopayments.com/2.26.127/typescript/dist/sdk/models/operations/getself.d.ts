import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSelfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userResponse?: shared.UserResponse;
    inlineResponse401?: any;
    inlineResponse403?: any;
}
