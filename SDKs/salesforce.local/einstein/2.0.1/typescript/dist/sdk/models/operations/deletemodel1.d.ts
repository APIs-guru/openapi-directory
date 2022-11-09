import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteModel1PathParams extends SpeakeasyBase {
    modelId: string;
}
export declare class DeleteModel1Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class DeleteModel1Request extends SpeakeasyBase {
    pathParams: DeleteModel1PathParams;
    security: DeleteModel1Security;
}
export declare class DeleteModel1Response extends SpeakeasyBase {
    contentType: string;
    deletionResponse?: shared.DeletionResponse;
    statusCode: number;
}
