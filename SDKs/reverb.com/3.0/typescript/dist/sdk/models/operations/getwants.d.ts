import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWantsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetWantsRequest extends SpeakeasyBase {
    security: GetWantsSecurity;
}
export declare class GetWantsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
