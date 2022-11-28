import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteMyFollowsCategoriesIdentifierPathParams extends SpeakeasyBase {
    identifier: string;
}
export declare class DeleteMyFollowsCategoriesIdentifierSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteMyFollowsCategoriesIdentifierRequest extends SpeakeasyBase {
    pathParams: DeleteMyFollowsCategoriesIdentifierPathParams;
    security: DeleteMyFollowsCategoriesIdentifierSecurity;
}
export declare class DeleteMyFollowsCategoriesIdentifierResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
