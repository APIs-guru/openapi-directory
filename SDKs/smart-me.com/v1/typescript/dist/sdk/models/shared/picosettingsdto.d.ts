import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PicoSettingsDtoAuthenticationTypeEnum {
    None = "None",
    Backend = "Backend"
}
/**
 * DTO for the pico charging station settings
**/
export declare class PicoSettingsDto extends SpeakeasyBase {
    authenticationType?: PicoSettingsDtoAuthenticationTypeEnum;
    displayBrightness?: string;
    dnsName?: string;
    idleImageData?: string;
    idleImageUrl?: string;
    internalIp?: string;
    loadmanagementGroupId?: string;
    maxCurrent?: number;
    minCurrent?: number;
    modbusTcp?: boolean;
    name?: string;
}
