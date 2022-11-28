import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UploadDatasetAsyncRequestBodyTypeEnum {
    TextIntent = "text-intent",
    TextSentiment = "text-sentiment"
}
export declare class UploadDatasetAsyncRequestBody extends SpeakeasyBase {
    data?: string;
    name?: string;
    path?: string;
    type?: UploadDatasetAsyncRequestBodyTypeEnum;
}
export declare class UploadDatasetAsyncSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class UploadDatasetAsyncRequest extends SpeakeasyBase {
    request?: UploadDatasetAsyncRequestBody;
    security: UploadDatasetAsyncSecurity;
}
export declare class UploadDatasetAsyncResponse extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
