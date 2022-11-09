import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InputConfigurationContainer } from "./inputconfigurationcontainer";
import { OutputConfigurationContainer } from "./outputconfigurationcontainer";
import { SwitchConfigurationContainer } from "./switchconfigurationcontainer";

export enum SmartMeDeviceConfigurationContainerDnsUpdateStateEnum {
    NoUpdate = "NoUpdate"
,    DnsUpdatePublicIp = "DnsUpdatePublicIp"
,    DnsUpdateInternalIp = "DnsUpdateInternalIp"
}

export enum SmartMeDeviceConfigurationContainerUploadIntervalEnum {
    UploadInterval1s = "UploadInterval_1s"
,    UploadInterval5s = "UploadInterval_5s"
,    UploadInterval10s = "UploadInterval_10s"
,    UploadInterval30s = "UploadInterval_30s"
,    UploadInterval60s = "UploadInterval_60s"
,    UploadInterval5min = "UploadInterval_5min"
,    UploadInterval15min = "UploadInterval_15min"
,    UploadInterval30min = "UploadInterval_30min"
,    UploadInterval60min = "UploadInterval_60min"
,    UploadInterval6h = "UploadInterval_6h"
,    UploadInterval12h = "UploadInterval_12h"
,    UploadInterval24h = "UploadInterval_24h"
}


// SmartMeDeviceConfigurationContainer
/** 
 * API Container class for the meter configuration
**/
export class SmartMeDeviceConfigurationContainer extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceEncryptionKey" })
  deviceEncryptionKey?: string;

  @Metadata({ data: "json, name=DevicePinCode" })
  devicePinCode?: string;

  @Metadata({ data: "json, name=DnsUpdateState" })
  dnsUpdateState?: SmartMeDeviceConfigurationContainerDnsUpdateStateEnum;

  @Metadata({ data: "json, name=EnableModbusTcp" })
  enableModbusTcp?: boolean;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=InputConfiguration", elemType: shared.InputConfigurationContainer })
  inputConfiguration?: InputConfigurationContainer[];

  @Metadata({ data: "json, name=OutputConfiguration", elemType: shared.OutputConfigurationContainer })
  outputConfiguration?: OutputConfigurationContainer[];

  @Metadata({ data: "json, name=ShowReactiveEnergy" })
  showReactiveEnergy?: boolean;

  @Metadata({ data: "json, name=SwitchConfiguration", elemType: shared.SwitchConfigurationContainer })
  switchConfiguration?: SwitchConfigurationContainer[];

  @Metadata({ data: "json, name=UploadInterval" })
  uploadInterval?: SmartMeDeviceConfigurationContainerUploadIntervalEnum;
}
