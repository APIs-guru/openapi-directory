import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateDatasetAsync1RequestBody extends SpeakeasyBase {
    data?: string;
    modelId?: string;
}
export declare class UpdateDatasetAsync1Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class UpdateDatasetAsync1Request extends SpeakeasyBase {
    request?: UpdateDatasetAsync1RequestBody;
    security: UpdateDatasetAsync1Security;
}
export declare class UpdateDatasetAsync1Response extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
