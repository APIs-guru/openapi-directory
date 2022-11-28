import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSessionRequest extends SpeakeasyBase {
    request: any;
}
export declare class PostSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
