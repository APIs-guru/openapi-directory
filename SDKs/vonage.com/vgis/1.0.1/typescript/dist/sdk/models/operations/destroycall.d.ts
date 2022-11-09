import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DestroyCallPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DestroyCallRequest extends SpeakeasyBase {
    pathParams: DestroyCallPathParams;
}
export declare class DestroyCallResponse extends SpeakeasyBase {
    calls?: shared.Call[];
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
