import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDashboardImportRequestBodyFormData extends SpeakeasyBase {
    content: Uint8Array;
    formData: string;
}
export declare class PostDashboardImportRequestBody extends SpeakeasyBase {
    formData?: PostDashboardImportRequestBodyFormData;
    overwrite?: boolean;
    passwords?: string;
}
export declare class PostDashboardImportSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PostDashboardImport200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDashboardImport400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDashboardImport401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDashboardImport422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDashboardImport500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDashboardImportRequest extends SpeakeasyBase {
    request: PostDashboardImportRequestBody;
    security: PostDashboardImportSecurity;
}
export declare class PostDashboardImportResponse extends SpeakeasyBase {
    contentType: string;
    postDashboardImport200ApplicationJsonObject?: PostDashboardImport200ApplicationJson;
    postDashboardImport400ApplicationJsonObject?: PostDashboardImport400ApplicationJson;
    postDashboardImport401ApplicationJsonObject?: PostDashboardImport401ApplicationJson;
    postDashboardImport422ApplicationJsonObject?: PostDashboardImport422ApplicationJson;
    postDashboardImport500ApplicationJsonObject?: PostDashboardImport500ApplicationJson;
    statusCode: number;
}
