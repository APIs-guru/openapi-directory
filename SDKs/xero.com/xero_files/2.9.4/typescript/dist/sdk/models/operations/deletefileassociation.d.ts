import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteFileAssociationPathParams extends SpeakeasyBase {
    fileId: string;
    objectId: string;
}
export declare class DeleteFileAssociationHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class DeleteFileAssociationSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteFileAssociationRequest extends SpeakeasyBase {
    pathParams: DeleteFileAssociationPathParams;
    headers: DeleteFileAssociationHeaders;
    security: DeleteFileAssociationSecurity;
}
export declare class DeleteFileAssociationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
