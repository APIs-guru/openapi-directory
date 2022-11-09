import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEBINDING_SERVERS: string[];
export declare class DeleteBindingPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteBindingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteBindingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteBindingPathParams;
    security: DeleteBindingSecurity;
}
export declare class DeleteBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
