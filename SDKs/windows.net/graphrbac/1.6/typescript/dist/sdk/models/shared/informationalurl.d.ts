import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a group of URIs that provide terms of service, marketing, support and privacy policy information about an application. The default value for each string is null.
**/
export declare class InformationalUrl extends SpeakeasyBase {
    marketing?: string;
    privacy?: string;
    support?: string;
    termsOfService?: string;
}
