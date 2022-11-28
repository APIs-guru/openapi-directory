import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteListingsSlugPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class DeleteListingsSlugSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteListingsSlugRequest extends SpeakeasyBase {
    pathParams: DeleteListingsSlugPathParams;
    security: DeleteListingsSlugSecurity;
}
export declare class DeleteListingsSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
