import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoCreditPathParams extends SpeakeasyBase {
    creditId: number;
    videoId: number;
}
export declare class DeleteVideoCreditSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVideoCreditRequest extends SpeakeasyBase {
    pathParams: DeleteVideoCreditPathParams;
    security: DeleteVideoCreditSecurity;
}
export declare class DeleteVideoCreditResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
