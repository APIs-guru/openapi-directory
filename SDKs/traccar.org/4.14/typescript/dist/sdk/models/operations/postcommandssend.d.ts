import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCommandsSendRequest extends SpeakeasyBase {
    request: shared.Command;
}
export declare class PostCommandsSendResponse extends SpeakeasyBase {
    command?: shared.Command;
    contentType: string;
    statusCode: number;
}
