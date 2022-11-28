import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDatasetImportRequestBodyFormData extends SpeakeasyBase {
    content: Uint8Array;
    formData: string;
}
export declare class PostDatasetImportRequestBody extends SpeakeasyBase {
    formData?: PostDatasetImportRequestBodyFormData;
    overwrite?: boolean;
    passwords?: string;
}
export declare class PostDatasetImportSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PostDatasetImport200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatasetImport400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatasetImport401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatasetImport422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatasetImport500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatasetImportRequest extends SpeakeasyBase {
    request: PostDatasetImportRequestBody;
    security: PostDatasetImportSecurity;
}
export declare class PostDatasetImportResponse extends SpeakeasyBase {
    contentType: string;
    postDatasetImport200ApplicationJsonObject?: PostDatasetImport200ApplicationJson;
    postDatasetImport400ApplicationJsonObject?: PostDatasetImport400ApplicationJson;
    postDatasetImport401ApplicationJsonObject?: PostDatasetImport401ApplicationJson;
    postDatasetImport422ApplicationJsonObject?: PostDatasetImport422ApplicationJson;
    postDatasetImport500ApplicationJsonObject?: PostDatasetImport500ApplicationJson;
    statusCode: number;
}
