import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingsIdNegotiationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListingsIdNegotiationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetListingsIdNegotiationRequest extends SpeakeasyBase {
    pathParams: GetListingsIdNegotiationPathParams;
    security: GetListingsIdNegotiationSecurity;
}
export declare class GetListingsIdNegotiationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
