import { SpeakeasyBase } from "../../../internal/utils";
export declare class ValidateForVoiceQueryParams extends SpeakeasyBase {
    callback?: string;
    number: string;
}
export declare class ValidateForVoice200ApplicationJson extends SpeakeasyBase {
    code?: string;
    error?: string;
    success?: boolean;
}
export declare class ValidateForVoiceRequest extends SpeakeasyBase {
    queryParams: ValidateForVoiceQueryParams;
}
export declare class ValidateForVoiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validateForVoice200ApplicationJsonObject?: ValidateForVoice200ApplicationJson;
}
