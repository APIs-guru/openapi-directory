import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePasswordSelfRequest extends SpeakeasyBase {
    request: shared.SelfUpdatePasswordRequest;
}
export declare class UpdatePasswordSelfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
}
