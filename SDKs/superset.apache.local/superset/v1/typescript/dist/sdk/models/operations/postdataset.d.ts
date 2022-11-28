import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDatasetSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PostDataset201ApplicationJson extends SpeakeasyBase {
    id?: number;
    result?: shared.DatasetRestApiPost;
}
export declare class PostDataset400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDataset401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDataset422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDataset500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatasetRequest extends SpeakeasyBase {
    request: shared.DatasetRestApiPost;
    security: PostDatasetSecurity;
}
export declare class PostDatasetResponse extends SpeakeasyBase {
    contentType: string;
    postDataset201ApplicationJsonObject?: PostDataset201ApplicationJson;
    postDataset400ApplicationJsonObject?: PostDataset400ApplicationJson;
    postDataset401ApplicationJsonObject?: PostDataset401ApplicationJson;
    postDataset422ApplicationJsonObject?: PostDataset422ApplicationJson;
    postDataset500ApplicationJsonObject?: PostDataset500ApplicationJson;
    statusCode: number;
}
