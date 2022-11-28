import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutServerRequest extends SpeakeasyBase {
    request: shared.Server;
}
export declare class PutServerResponse extends SpeakeasyBase {
    contentType: string;
    server?: shared.Server;
    statusCode: number;
}
