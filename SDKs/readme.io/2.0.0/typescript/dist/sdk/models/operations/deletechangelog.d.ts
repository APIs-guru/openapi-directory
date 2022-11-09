import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteChangelogPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class DeleteChangelogSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DeleteChangelogRequest extends SpeakeasyBase {
    pathParams: DeleteChangelogPathParams;
    security: DeleteChangelogSecurity;
}
export declare class DeleteChangelogResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
