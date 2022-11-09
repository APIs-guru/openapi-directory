import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESOURCEIPMAPPING_SERVERS: string[];
export declare class DeleteSourceIpMappingPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteSourceIpMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSourceIpMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSourceIpMappingPathParams;
    security: DeleteSourceIpMappingSecurity;
}
export declare class DeleteSourceIpMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
