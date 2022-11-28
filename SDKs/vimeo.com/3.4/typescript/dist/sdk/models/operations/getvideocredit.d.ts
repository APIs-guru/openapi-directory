import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoCreditPathParams extends SpeakeasyBase {
    creditId: number;
    videoId: number;
}
export declare class GetVideoCreditRequest extends SpeakeasyBase {
    pathParams: GetVideoCreditPathParams;
}
export declare class GetVideoCreditResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    credit?: shared.Credit;
    legacyError?: shared.LegacyError;
}
