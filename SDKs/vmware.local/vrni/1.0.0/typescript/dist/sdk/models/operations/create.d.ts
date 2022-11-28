import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateRequest extends SpeakeasyBase {
    request: shared.UserCredential;
}
export declare class CreateResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    token?: shared.Token;
}
