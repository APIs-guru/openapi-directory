import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostNewPayRunJobHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostNewPayRunJobRequest extends SpeakeasyBase {
    headers: PostNewPayRunJobHeaders;
    request: shared.PayRunJobInstruction;
}
export declare class PostNewPayRunJobResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
