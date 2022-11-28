import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyFollowsCategoriesIdentifierPathParams extends SpeakeasyBase {
    identifier: string;
}
export declare class GetMyFollowsCategoriesIdentifierSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyFollowsCategoriesIdentifierRequest extends SpeakeasyBase {
    pathParams: GetMyFollowsCategoriesIdentifierPathParams;
    security: GetMyFollowsCategoriesIdentifierSecurity;
}
export declare class GetMyFollowsCategoriesIdentifierResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
