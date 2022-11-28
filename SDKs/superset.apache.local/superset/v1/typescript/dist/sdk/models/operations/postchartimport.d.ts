import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostChartImportRequestBodyFormData extends SpeakeasyBase {
    content: Uint8Array;
    formData: string;
}
export declare class PostChartImportRequestBody extends SpeakeasyBase {
    formData?: PostChartImportRequestBodyFormData;
    overwrite?: boolean;
    passwords?: string;
}
export declare class PostChartImportSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PostChartImport200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostChartImport400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostChartImport401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostChartImport422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostChartImport500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostChartImportRequest extends SpeakeasyBase {
    request: PostChartImportRequestBody;
    security: PostChartImportSecurity;
}
export declare class PostChartImportResponse extends SpeakeasyBase {
    contentType: string;
    postChartImport200ApplicationJsonObject?: PostChartImport200ApplicationJson;
    postChartImport400ApplicationJsonObject?: PostChartImport400ApplicationJson;
    postChartImport401ApplicationJsonObject?: PostChartImport401ApplicationJson;
    postChartImport422ApplicationJsonObject?: PostChartImport422ApplicationJson;
    postChartImport500ApplicationJsonObject?: PostChartImport500ApplicationJson;
    statusCode: number;
}
