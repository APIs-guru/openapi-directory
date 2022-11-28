import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegisterSmsRequest extends SpeakeasyBase {
    request: shared.RegisterSmsRequest;
}
export declare class RegisterSmsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
}
