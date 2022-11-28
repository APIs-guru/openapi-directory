import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutWantsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutWantsIdSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PutWantsIdRequest extends SpeakeasyBase {
    pathParams: PutWantsIdPathParams;
    security: PutWantsIdSecurity;
}
export declare class PutWantsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
