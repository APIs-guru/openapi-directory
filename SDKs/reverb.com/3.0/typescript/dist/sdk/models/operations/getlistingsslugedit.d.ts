import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingsSlugEditPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class GetListingsSlugEditSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetListingsSlugEditRequest extends SpeakeasyBase {
    pathParams: GetListingsSlugEditPathParams;
    security: GetListingsSlugEditSecurity;
}
export declare class GetListingsSlugEditResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
