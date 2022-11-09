import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteCustomPagePathParams extends SpeakeasyBase {
    slug: string;
}
export declare class DeleteCustomPageSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DeleteCustomPageRequest extends SpeakeasyBase {
    pathParams: DeleteCustomPagePathParams;
    security: DeleteCustomPageSecurity;
}
export declare class DeleteCustomPageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
