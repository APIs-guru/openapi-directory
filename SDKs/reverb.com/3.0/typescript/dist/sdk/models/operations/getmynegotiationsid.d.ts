import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyNegotiationsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetMyNegotiationsIdSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyNegotiationsIdRequest extends SpeakeasyBase {
    pathParams: GetMyNegotiationsIdPathParams;
    security: GetMyNegotiationsIdSecurity;
}
export declare class GetMyNegotiationsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
