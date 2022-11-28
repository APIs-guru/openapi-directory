import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteWantsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteWantsIdSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteWantsIdRequest extends SpeakeasyBase {
    pathParams: DeleteWantsIdPathParams;
    security: DeleteWantsIdSecurity;
}
export declare class DeleteWantsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
