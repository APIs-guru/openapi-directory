import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHFLOWREVISION_SERVERS: string[];
export declare class FetchFlowRevisionPathParams extends SpeakeasyBase {
    revision: string;
    sid: string;
}
export declare class FetchFlowRevisionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchFlowRevisionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchFlowRevisionPathParams;
    security: FetchFlowRevisionSecurity;
}
export declare class FetchFlowRevisionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studioV2FlowFlowRevision?: shared.StudioV2FlowFlowRevision;
}
