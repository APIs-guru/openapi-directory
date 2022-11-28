import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegisterForRealtimeApiPostRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    registerRealtimeApiData?: shared.RegisterRealtimeApiData;
    registerRealtimeApiData1?: shared.RegisterRealtimeApiData;
    registerRealtimeApiData2?: shared.RegisterRealtimeApiData;
    textXml: Uint8Array;
}
export declare class RegisterForRealtimeApiPostRequest extends SpeakeasyBase {
    request: RegisterForRealtimeApiPostRequests;
}
export declare class RegisterForRealtimeApiPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
