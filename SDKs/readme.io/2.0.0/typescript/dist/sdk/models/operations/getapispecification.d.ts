import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiSpecificationQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetApiSpecificationHeaders extends SpeakeasyBase {
    xReadmeVersion: string;
}
export declare class GetApiSpecificationSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetApiSpecificationRequest extends SpeakeasyBase {
    queryParams: GetApiSpecificationQueryParams;
    headers: GetApiSpecificationHeaders;
    security: GetApiSpecificationSecurity;
}
export declare class GetApiSpecificationResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
