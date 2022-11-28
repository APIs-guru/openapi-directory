import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCommandsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutCommandsIdRequest extends SpeakeasyBase {
    pathParams: PutCommandsIdPathParams;
    request: shared.Command;
}
export declare class PutCommandsIdResponse extends SpeakeasyBase {
    command?: shared.Command;
    contentType: string;
    statusCode: number;
}
