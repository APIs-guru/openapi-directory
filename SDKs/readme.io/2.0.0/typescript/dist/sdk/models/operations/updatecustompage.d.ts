import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateCustomPagePathParams extends SpeakeasyBase {
    slug: string;
}
export declare class UpdateCustomPageSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UpdateCustomPageRequest extends SpeakeasyBase {
    pathParams: UpdateCustomPagePathParams;
    request: shared.CustomPage;
    security: UpdateCustomPageSecurity;
}
export declare class UpdateCustomPageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
