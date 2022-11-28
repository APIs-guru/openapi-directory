import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDatabaseImportRequestBodyFormData extends SpeakeasyBase {
    content: Uint8Array;
    formData: string;
}
export declare class PostDatabaseImportRequestBody extends SpeakeasyBase {
    formData?: PostDatabaseImportRequestBodyFormData;
    overwrite?: boolean;
    passwords?: string;
}
export declare class PostDatabaseImportSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PostDatabaseImport200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatabaseImport400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatabaseImport401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatabaseImport422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatabaseImport500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatabaseImportRequest extends SpeakeasyBase {
    request: PostDatabaseImportRequestBody;
    security: PostDatabaseImportSecurity;
}
export declare class PostDatabaseImportResponse extends SpeakeasyBase {
    contentType: string;
    postDatabaseImport200ApplicationJsonObject?: PostDatabaseImport200ApplicationJson;
    postDatabaseImport400ApplicationJsonObject?: PostDatabaseImport400ApplicationJson;
    postDatabaseImport401ApplicationJsonObject?: PostDatabaseImport401ApplicationJson;
    postDatabaseImport422ApplicationJsonObject?: PostDatabaseImport422ApplicationJson;
    postDatabaseImport500ApplicationJsonObject?: PostDatabaseImport500ApplicationJson;
    statusCode: number;
}
