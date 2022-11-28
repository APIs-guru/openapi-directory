import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostNewDpsJobHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostNewDpsJobRequest extends SpeakeasyBase {
    headers: PostNewDpsJobHeaders;
    request: shared.DpsJobInstruction;
}
export declare class PostNewDpsJobResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
