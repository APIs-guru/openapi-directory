import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Send rendered assets to the Shotstack hosting and CDN service. This destination is enabled by default.
**/
export declare class ShotstackDestination extends SpeakeasyBase {
    exclude?: boolean;
    provider: string;
}
