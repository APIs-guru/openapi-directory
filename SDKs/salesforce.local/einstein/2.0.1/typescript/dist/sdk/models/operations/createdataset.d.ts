import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateDatasetRequestBodyTypeEnum {
    Image = "image",
    ImageMultiLabel = "image-multi-label"
}
export declare class CreateDatasetRequestBody extends SpeakeasyBase {
    labels?: string;
    name?: string;
    type?: CreateDatasetRequestBodyTypeEnum;
}
export declare class CreateDatasetSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class CreateDatasetRequest extends SpeakeasyBase {
    request?: CreateDatasetRequestBody;
    security: CreateDatasetSecurity;
}
export declare class CreateDatasetResponse extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
