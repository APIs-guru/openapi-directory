import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteModelPathParams extends SpeakeasyBase {
    modelId: string;
}
export declare class DeleteModelSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class DeleteModelRequest extends SpeakeasyBase {
    pathParams: DeleteModelPathParams;
    security: DeleteModelSecurity;
}
export declare class DeleteModelResponse extends SpeakeasyBase {
    contentType: string;
    deletionResponse?: shared.DeletionResponse;
    statusCode: number;
}
