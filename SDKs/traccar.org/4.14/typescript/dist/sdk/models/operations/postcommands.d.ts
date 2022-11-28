import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCommandsRequest extends SpeakeasyBase {
    request: shared.Command;
}
export declare class PostCommandsResponse extends SpeakeasyBase {
    command?: shared.Command;
    contentType: string;
    statusCode: number;
}
