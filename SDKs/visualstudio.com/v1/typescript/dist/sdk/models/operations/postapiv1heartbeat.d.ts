import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiV1HeartBeatRequests extends SpeakeasyBase {
    heartBeatBody?: shared.HeartBeatBody;
    heartBeatBody1?: shared.HeartBeatBody;
    heartBeatBody2?: shared.HeartBeatBody;
    heartBeatBody3?: shared.HeartBeatBody;
}
export declare class PostApiV1HeartBeatRequest extends SpeakeasyBase {
    request?: PostApiV1HeartBeatRequests;
}
export declare class PostApiV1HeartBeatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
