import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PicoSettingsDtoAuthenticationTypeEnum {
    None = "None"
,    Backend = "Backend"
}


// PicoSettingsDto
/** 
 * DTO for the pico charging station settings
**/
export class PicoSettingsDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthenticationType" })
  authenticationType?: PicoSettingsDtoAuthenticationTypeEnum;

  @Metadata({ data: "json, name=DisplayBrightness" })
  displayBrightness?: string;

  @Metadata({ data: "json, name=DnsName" })
  dnsName?: string;

  @Metadata({ data: "json, name=IdleImageData" })
  idleImageData?: string;

  @Metadata({ data: "json, name=IdleImageUrl" })
  idleImageUrl?: string;

  @Metadata({ data: "json, name=InternalIp" })
  internalIp?: string;

  @Metadata({ data: "json, name=LoadmanagementGroupId" })
  loadmanagementGroupId?: string;

  @Metadata({ data: "json, name=MaxCurrent" })
  maxCurrent?: number;

  @Metadata({ data: "json, name=MinCurrent" })
  minCurrent?: number;

  @Metadata({ data: "json, name=ModbusTcp" })
  modbusTcp?: boolean;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
