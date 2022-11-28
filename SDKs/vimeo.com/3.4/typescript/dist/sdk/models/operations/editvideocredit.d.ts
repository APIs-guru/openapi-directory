import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditVideoCreditPathParams extends SpeakeasyBase {
    creditId: number;
    videoId: number;
}
export declare class EditVideoCreditRequestBody extends SpeakeasyBase {
    name?: string;
    role?: string;
}
export declare class EditVideoCreditSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class EditVideoCreditRequest extends SpeakeasyBase {
    pathParams: EditVideoCreditPathParams;
    request?: EditVideoCreditRequestBody;
    security: EditVideoCreditSecurity;
}
export declare class EditVideoCreditResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    credit?: shared.Credit;
    legacyError?: shared.LegacyError;
}
