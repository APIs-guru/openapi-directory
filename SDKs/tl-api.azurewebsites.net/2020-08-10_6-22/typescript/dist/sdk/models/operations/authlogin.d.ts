import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthLoginRequest extends SpeakeasyBase {
    request: shared.LoginDto;
}
export declare class AuthLoginResponse extends SpeakeasyBase {
    authLogin200ApplicationOctetStreamBinaryString?: Uint8Array;
    contentType: string;
    statusCode: number;
}
