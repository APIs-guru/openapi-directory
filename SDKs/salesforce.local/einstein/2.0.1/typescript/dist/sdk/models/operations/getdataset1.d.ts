import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDataset1PathParams extends SpeakeasyBase {
    datasetId: string;
}
export declare class GetDataset1Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class GetDataset1Request extends SpeakeasyBase {
    pathParams: GetDataset1PathParams;
    security: GetDataset1Security;
}
export declare class GetDataset1Response extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
