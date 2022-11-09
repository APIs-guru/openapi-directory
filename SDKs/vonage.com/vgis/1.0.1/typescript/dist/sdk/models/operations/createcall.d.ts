import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateCallRequest extends SpeakeasyBase {
    request: shared.CallCreate;
}
export declare class CreateCallResponse extends SpeakeasyBase {
    calls?: shared.Call[];
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
