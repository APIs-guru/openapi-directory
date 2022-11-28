import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoCreditPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class AddVideoCreditRequestBody extends SpeakeasyBase {
    email: string;
    name: string;
    role: string;
    userUri: string;
}
export declare class AddVideoCreditRequest extends SpeakeasyBase {
    pathParams: AddVideoCreditPathParams;
    request: AddVideoCreditRequestBody;
}
export declare class AddVideoCreditResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    credit?: shared.Credit;
    legacyError?: shared.LegacyError;
}
