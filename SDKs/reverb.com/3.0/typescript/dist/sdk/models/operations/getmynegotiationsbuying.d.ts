import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyNegotiationsBuyingQueryParams extends SpeakeasyBase {
    offset?: number;
    page?: number;
    perPage?: number;
}
export declare class GetMyNegotiationsBuyingSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyNegotiationsBuyingRequest extends SpeakeasyBase {
    queryParams: GetMyNegotiationsBuyingQueryParams;
    security: GetMyNegotiationsBuyingSecurity;
}
export declare class GetMyNegotiationsBuyingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
