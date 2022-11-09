import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCustomPagePathParams extends SpeakeasyBase {
    slug: string;
}
export declare class GetCustomPageSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetCustomPageRequest extends SpeakeasyBase {
    pathParams: GetCustomPagePathParams;
    security: GetCustomPageSecurity;
}
export declare class GetCustomPageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
