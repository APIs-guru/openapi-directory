import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UploadDatasetSyncRequestBodyTypeEnum {
    TextIntent = "text-intent",
    TextSentiment = "text-sentiment"
}
export declare class UploadDatasetSyncRequestBody extends SpeakeasyBase {
    data?: string;
    name?: string;
    path?: string;
    type?: UploadDatasetSyncRequestBodyTypeEnum;
}
export declare class UploadDatasetSyncSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class UploadDatasetSyncRequest extends SpeakeasyBase {
    request?: UploadDatasetSyncRequestBody;
    security: UploadDatasetSyncSecurity;
}
export declare class UploadDatasetSyncResponse extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
