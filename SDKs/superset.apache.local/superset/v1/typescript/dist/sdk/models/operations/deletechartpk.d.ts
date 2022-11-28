import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteChartPkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class DeleteChartPkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class DeleteChartPk200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteChartPk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteChartPk403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteChartPk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteChartPk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteChartPk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteChartPkRequest extends SpeakeasyBase {
    pathParams: DeleteChartPkPathParams;
    security: DeleteChartPkSecurity;
}
export declare class DeleteChartPkResponse extends SpeakeasyBase {
    contentType: string;
    deleteChartPk200ApplicationJsonObject?: DeleteChartPk200ApplicationJson;
    deleteChartPk401ApplicationJsonObject?: DeleteChartPk401ApplicationJson;
    deleteChartPk403ApplicationJsonObject?: DeleteChartPk403ApplicationJson;
    deleteChartPk404ApplicationJsonObject?: DeleteChartPk404ApplicationJson;
    deleteChartPk422ApplicationJsonObject?: DeleteChartPk422ApplicationJson;
    deleteChartPk500ApplicationJsonObject?: DeleteChartPk500ApplicationJson;
    statusCode: number;
}
