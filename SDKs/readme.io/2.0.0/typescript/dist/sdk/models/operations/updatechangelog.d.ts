import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateChangelogPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class UpdateChangelogSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UpdateChangelogRequest extends SpeakeasyBase {
    pathParams: UpdateChangelogPathParams;
    request: shared.Changelog;
    security: UpdateChangelogSecurity;
}
export declare class UpdateChangelogResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
