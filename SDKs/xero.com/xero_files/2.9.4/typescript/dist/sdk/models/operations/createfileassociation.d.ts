import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateFileAssociationPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class CreateFileAssociationHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class CreateFileAssociationSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateFileAssociationRequest extends SpeakeasyBase {
    pathParams: CreateFileAssociationPathParams;
    headers: CreateFileAssociationHeaders;
    request?: shared.Association;
    security: CreateFileAssociationSecurity;
}
export declare class CreateFileAssociationResponse extends SpeakeasyBase {
    association?: shared.Association;
    contentType: string;
    statusCode: number;
}
