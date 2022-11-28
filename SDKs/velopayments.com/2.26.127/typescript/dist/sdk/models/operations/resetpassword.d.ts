import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResetPasswordRequest extends SpeakeasyBase {
    request: shared.ResetPasswordRequest;
}
export declare class ResetPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
}
