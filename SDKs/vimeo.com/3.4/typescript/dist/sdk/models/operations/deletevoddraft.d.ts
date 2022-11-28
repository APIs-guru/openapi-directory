import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVodDraftPathParams extends SpeakeasyBase {
    ondemandId: number;
}
export declare class DeleteVodDraftSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVodDraftRequest extends SpeakeasyBase {
    pathParams: DeleteVodDraftPathParams;
    security: DeleteVodDraftSecurity;
}
export declare class DeleteVodDraftResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
