import { SpeakeasyBase } from "../../../internal/utils";
export declare class VoiceQueryParams extends SpeakeasyBase {
    from?: string;
    text: string;
    to: string;
    xml?: number;
}
export declare class VoiceRequest extends SpeakeasyBase {
    queryParams: VoiceQueryParams;
}
export declare class VoiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voice200TextPlainString?: string;
}
