import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PicoSettingsDtoAuthenticationTypeEnum {
    None = "None",
    Backend = "Backend"
}


// PicoSettingsDto
/** 
 * DTO for the pico charging station settings
**/
export class PicoSettingsDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthenticationType" })
  authenticationType?: PicoSettingsDtoAuthenticationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DisplayBrightness" })
  displayBrightness?: string;

  @SpeakeasyMetadata({ data: "json, name=DnsName" })
  dnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=IdleImageData" })
  idleImageData?: string;

  @SpeakeasyMetadata({ data: "json, name=IdleImageUrl" })
  idleImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=InternalIp" })
  internalIp?: string;

  @SpeakeasyMetadata({ data: "json, name=LoadmanagementGroupId" })
  loadmanagementGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxCurrent" })
  maxCurrent?: number;

  @SpeakeasyMetadata({ data: "json, name=MinCurrent" })
  minCurrent?: number;

  @SpeakeasyMetadata({ data: "json, name=ModbusTcp" })
  modbusTcp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
