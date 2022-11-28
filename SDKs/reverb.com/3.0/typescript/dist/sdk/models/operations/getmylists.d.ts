import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyListsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyListsRequest extends SpeakeasyBase {
    security: GetMyListsSecurity;
}
export declare class GetMyListsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
