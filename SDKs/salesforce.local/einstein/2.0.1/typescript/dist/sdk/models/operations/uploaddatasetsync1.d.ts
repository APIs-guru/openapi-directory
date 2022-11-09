import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UploadDatasetSync1RequestBodyTypeEnum {
    Image = "image",
    ImageDetection = "image-detection",
    ImageMultiLabel = "image-multi-label"
}
export declare class UploadDatasetSync1RequestBody extends SpeakeasyBase {
    data?: string;
    name?: string;
    path?: string;
    type?: UploadDatasetSync1RequestBodyTypeEnum;
}
export declare class UploadDatasetSync1Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class UploadDatasetSync1Request extends SpeakeasyBase {
    request?: UploadDatasetSync1RequestBody;
    security: UploadDatasetSync1Security;
}
export declare class UploadDatasetSync1Response extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
