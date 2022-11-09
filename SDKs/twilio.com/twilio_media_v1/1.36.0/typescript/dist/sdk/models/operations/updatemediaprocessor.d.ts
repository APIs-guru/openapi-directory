import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEMEDIAPROCESSOR_SERVERS: string[];
export declare class UpdateMediaProcessorPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateMediaProcessorUpdateMediaProcessorRequest extends SpeakeasyBase {
    status: shared.MediaProcessorEnumUpdateStatusEnum;
}
export declare class UpdateMediaProcessorSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateMediaProcessorRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateMediaProcessorPathParams;
    request?: UpdateMediaProcessorUpdateMediaProcessorRequest;
    security: UpdateMediaProcessorSecurity;
}
export declare class UpdateMediaProcessorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mediaV1MediaProcessor?: shared.MediaV1MediaProcessor;
}
