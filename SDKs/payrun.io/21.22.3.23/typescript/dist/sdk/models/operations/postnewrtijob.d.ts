import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostNewRtiJobHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostNewRtiJobRequest extends SpeakeasyBase {
    headers: PostNewRtiJobHeaders;
    request: shared.RtiJobInstruction;
}
export declare class PostNewRtiJobResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
