import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ValidatePasswordSelfRequest extends SpeakeasyBase {
    request: shared.PasswordRequest;
}
export declare class ValidatePasswordSelfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validatePasswordResponse?: shared.ValidatePasswordResponse;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
}
