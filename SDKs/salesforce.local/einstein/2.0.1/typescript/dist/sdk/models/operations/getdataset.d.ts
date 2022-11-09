import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDatasetPathParams extends SpeakeasyBase {
    datasetId: string;
}
export declare class GetDatasetSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class GetDatasetRequest extends SpeakeasyBase {
    pathParams: GetDatasetPathParams;
    security: GetDatasetSecurity;
}
export declare class GetDatasetResponse extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
