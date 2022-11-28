import { SpeakeasyBase } from "../../../internal/utils";
export declare class PayorLogoRequestLogo extends SpeakeasyBase {
    content: Uint8Array;
    logo: string;
}
export declare class PayorLogoRequest extends SpeakeasyBase {
    logo?: PayorLogoRequestLogo;
}
