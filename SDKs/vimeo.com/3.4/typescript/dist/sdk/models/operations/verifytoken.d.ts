import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VerifyTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    auth?: shared.Auth;
    legacyError?: shared.LegacyError;
}
