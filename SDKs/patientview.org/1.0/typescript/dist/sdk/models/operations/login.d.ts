import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LogInRequest extends SpeakeasyBase {
    request?: shared.Credentials;
}
export declare class LogInResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
