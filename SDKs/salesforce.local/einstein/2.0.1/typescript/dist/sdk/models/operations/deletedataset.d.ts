import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteDatasetPathParams extends SpeakeasyBase {
    datasetId: string;
}
export declare class DeleteDatasetSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class DeleteDatasetRequest extends SpeakeasyBase {
    pathParams: DeleteDatasetPathParams;
    security: DeleteDatasetSecurity;
}
export declare class DeleteDatasetResponse extends SpeakeasyBase {
    contentType: string;
    deletionResponse?: shared.DeletionResponse;
    statusCode: number;
}
