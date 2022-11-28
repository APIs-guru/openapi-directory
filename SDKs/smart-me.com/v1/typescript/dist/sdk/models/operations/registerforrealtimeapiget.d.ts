import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegisterForRealtimeApiGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    registerRealtimeApiData?: shared.RegisterRealtimeApiData[];
    statusCode: number;
}
