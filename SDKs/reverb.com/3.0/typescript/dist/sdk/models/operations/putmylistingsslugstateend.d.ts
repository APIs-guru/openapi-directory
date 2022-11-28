import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutMyListingsSlugStateEndPathParams extends SpeakeasyBase {
    slug: string;
}
export declare enum PutMyListingsSlugStateEndRequestBodyReasonEnum {
    NotSold = "not_sold",
    ReverbSale = "reverb_sale"
}
export declare class PutMyListingsSlugStateEndRequestBody extends SpeakeasyBase {
    reason: PutMyListingsSlugStateEndRequestBodyReasonEnum;
}
export declare class PutMyListingsSlugStateEndSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PutMyListingsSlugStateEndRequest extends SpeakeasyBase {
    pathParams: PutMyListingsSlugStateEndPathParams;
    request?: PutMyListingsSlugStateEndRequestBody;
    security: PutMyListingsSlugStateEndSecurity;
}
export declare class PutMyListingsSlugStateEndResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
