import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UploadDatasetAsync1RequestBodyTypeEnum {
    Image = "image",
    ImageDetection = "image-detection",
    ImageMultiLabel = "image-multi-label"
}
export declare class UploadDatasetAsync1RequestBody extends SpeakeasyBase {
    data?: string;
    name?: string;
    path?: string;
    type?: UploadDatasetAsync1RequestBodyTypeEnum;
}
export declare class UploadDatasetAsync1Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class UploadDatasetAsync1Request extends SpeakeasyBase {
    request?: UploadDatasetAsync1RequestBody;
    security: UploadDatasetAsync1Security;
}
export declare class UploadDatasetAsync1Response extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
