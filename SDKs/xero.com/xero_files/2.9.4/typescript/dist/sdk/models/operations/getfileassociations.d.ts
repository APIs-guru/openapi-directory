import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFileAssociationsPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class GetFileAssociationsHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetFileAssociationsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetFileAssociationsRequest extends SpeakeasyBase {
    pathParams: GetFileAssociationsPathParams;
    headers: GetFileAssociationsHeaders;
    security: GetFileAssociationsSecurity;
}
export declare class GetFileAssociationsResponse extends SpeakeasyBase {
    associations?: shared.Association[];
    contentType: string;
    statusCode: number;
}
