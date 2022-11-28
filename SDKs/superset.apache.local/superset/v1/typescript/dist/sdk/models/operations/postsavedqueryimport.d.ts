import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSavedQueryImportRequestBodyFormData extends SpeakeasyBase {
    content: Uint8Array;
    formData: string;
}
export declare class PostSavedQueryImportRequestBody extends SpeakeasyBase {
    formData?: PostSavedQueryImportRequestBodyFormData;
    overwrite?: boolean;
    passwords?: string;
}
export declare class PostSavedQueryImportSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PostSavedQueryImport200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostSavedQueryImport400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostSavedQueryImport401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostSavedQueryImport422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostSavedQueryImport500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostSavedQueryImportRequest extends SpeakeasyBase {
    request: PostSavedQueryImportRequestBody;
    security: PostSavedQueryImportSecurity;
}
export declare class PostSavedQueryImportResponse extends SpeakeasyBase {
    contentType: string;
    postSavedQueryImport200ApplicationJsonObject?: PostSavedQueryImport200ApplicationJson;
    postSavedQueryImport400ApplicationJsonObject?: PostSavedQueryImport400ApplicationJson;
    postSavedQueryImport401ApplicationJsonObject?: PostSavedQueryImport401ApplicationJson;
    postSavedQueryImport422ApplicationJsonObject?: PostSavedQueryImport422ApplicationJson;
    postSavedQueryImport500ApplicationJsonObject?: PostSavedQueryImport500ApplicationJson;
    statusCode: number;
}
