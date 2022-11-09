import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateCustomPageSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CreateCustomPageRequest extends SpeakeasyBase {
    request: shared.CustomPage;
    security: CreateCustomPageSecurity;
}
export declare class CreateCustomPageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
