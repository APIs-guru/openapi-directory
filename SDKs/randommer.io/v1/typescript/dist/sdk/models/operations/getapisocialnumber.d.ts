import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetApiSocialNumberHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class GetApiSocialNumberRequest extends SpeakeasyBase {
    headers: GetApiSocialNumberHeaders;
}
export declare class GetApiSocialNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
