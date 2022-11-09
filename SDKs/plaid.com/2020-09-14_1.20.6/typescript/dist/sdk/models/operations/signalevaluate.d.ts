import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SignalEvaluateRequest extends SpeakeasyBase {
    request: Map<string, any>;
}
export declare class SignalEvaluateResponse extends SpeakeasyBase {
    contentType: string;
    error?: Map<string, any>;
    signalEvaluateResponse?: Map<string, any>;
    statusCode: number;
}
