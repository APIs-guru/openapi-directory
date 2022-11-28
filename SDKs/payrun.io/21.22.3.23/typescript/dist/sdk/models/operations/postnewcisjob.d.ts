import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostNewCisJobHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostNewCisJobRequest extends SpeakeasyBase {
    headers: PostNewCisJobHeaders;
    request: shared.CisJobInstructionBase;
}
export declare class PostNewCisJobResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
