import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAssociationsByObjectPathParams extends SpeakeasyBase {
    objectId: string;
}
export declare class GetAssociationsByObjectHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetAssociationsByObjectSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetAssociationsByObjectRequest extends SpeakeasyBase {
    pathParams: GetAssociationsByObjectPathParams;
    headers: GetAssociationsByObjectHeaders;
    security: GetAssociationsByObjectSecurity;
}
export declare class GetAssociationsByObjectResponse extends SpeakeasyBase {
    associations?: shared.Association[];
    contentType: string;
    statusCode: number;
}
