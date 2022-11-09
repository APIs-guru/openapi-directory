import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteConnectionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteConnectionSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteConnectionRequest extends SpeakeasyBase {
    pathParams: DeleteConnectionPathParams;
    security: DeleteConnectionSecurity;
}
export declare class DeleteConnectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
