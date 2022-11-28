import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomPagesQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetCustomPagesSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetCustomPagesRequest extends SpeakeasyBase {
    queryParams: GetCustomPagesQueryParams;
    security: GetCustomPagesSecurity;
}
export declare class GetCustomPagesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
