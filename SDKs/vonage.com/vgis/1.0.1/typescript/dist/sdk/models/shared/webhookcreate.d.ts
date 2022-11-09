import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum WebhookCreateEventsEnum {
    Call = "CALL"
}
export declare enum WebhookCreateMetadataPolicyEnum {
    None = "NONE",
    Header = "HEADER",
    Body = "BODY"
}
export declare enum WebhookCreateSigningAlgoEnum {
    HmacSha256 = "HMAC_SHA256"
}
export declare class WebhookCreate extends SpeakeasyBase {
    events?: WebhookCreateEventsEnum[];
    metadataPolicy?: WebhookCreateMetadataPolicyEnum;
    signingAlgo?: WebhookCreateSigningAlgoEnum;
    signingKey?: string;
    url?: string;
}
