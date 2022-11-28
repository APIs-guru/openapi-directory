import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDataset1PathParams extends SpeakeasyBase {
    datasetId: string;
}
export declare class DeleteDataset1Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class DeleteDataset1Request extends SpeakeasyBase {
    pathParams: DeleteDataset1PathParams;
    security: DeleteDataset1Security;
}
export declare class DeleteDataset1Response extends SpeakeasyBase {
    contentType: string;
    deletionResponse?: shared.DeletionResponse;
    statusCode: number;
}
