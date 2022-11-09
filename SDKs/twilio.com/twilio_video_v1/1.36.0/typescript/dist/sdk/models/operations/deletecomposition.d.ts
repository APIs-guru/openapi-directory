import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETECOMPOSITION_SERVERS: string[];
export declare class DeleteCompositionPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteCompositionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteCompositionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteCompositionPathParams;
    security: DeleteCompositionSecurity;
}
export declare class DeleteCompositionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
