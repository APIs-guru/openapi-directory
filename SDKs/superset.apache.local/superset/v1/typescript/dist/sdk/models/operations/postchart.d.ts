import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostChartSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PostChart201ApplicationJson extends SpeakeasyBase {
    id?: number;
    result?: shared.ChartRestApiPost;
}
export declare class PostChart400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostChart401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostChart422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostChart500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostChartRequest extends SpeakeasyBase {
    request: shared.ChartRestApiPost;
    security: PostChartSecurity;
}
export declare class PostChartResponse extends SpeakeasyBase {
    contentType: string;
    postChart201ApplicationJsonObject?: PostChart201ApplicationJson;
    postChart400ApplicationJsonObject?: PostChart400ApplicationJson;
    postChart401ApplicationJsonObject?: PostChart401ApplicationJson;
    postChart422ApplicationJsonObject?: PostChart422ApplicationJson;
    postChart500ApplicationJsonObject?: PostChart500ApplicationJson;
    statusCode: number;
}
