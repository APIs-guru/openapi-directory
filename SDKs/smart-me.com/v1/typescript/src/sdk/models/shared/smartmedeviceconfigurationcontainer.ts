import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputConfigurationContainer } from "./inputconfigurationcontainer";
import { OutputConfigurationContainer } from "./outputconfigurationcontainer";
import { SwitchConfigurationContainer } from "./switchconfigurationcontainer";


export enum SmartMeDeviceConfigurationContainerDnsUpdateStateEnum {
    NoUpdate = "NoUpdate",
    DnsUpdatePublicIp = "DnsUpdatePublicIp",
    DnsUpdateInternalIp = "DnsUpdateInternalIp"
}

export enum SmartMeDeviceConfigurationContainerUploadIntervalEnum {
    UploadInterval1s = "UploadInterval_1s",
    UploadInterval5s = "UploadInterval_5s",
    UploadInterval10s = "UploadInterval_10s",
    UploadInterval30s = "UploadInterval_30s",
    UploadInterval60s = "UploadInterval_60s",
    UploadInterval5min = "UploadInterval_5min",
    UploadInterval15min = "UploadInterval_15min",
    UploadInterval30min = "UploadInterval_30min",
    UploadInterval60min = "UploadInterval_60min",
    UploadInterval6h = "UploadInterval_6h",
    UploadInterval12h = "UploadInterval_12h",
    UploadInterval24h = "UploadInterval_24h"
}


// SmartMeDeviceConfigurationContainer
/** 
 * API Container class for the meter configuration
**/
export class SmartMeDeviceConfigurationContainer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceEncryptionKey" })
  deviceEncryptionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=DevicePinCode" })
  devicePinCode?: string;

  @SpeakeasyMetadata({ data: "json, name=DnsUpdateState" })
  dnsUpdateState?: SmartMeDeviceConfigurationContainerDnsUpdateStateEnum;

  @SpeakeasyMetadata({ data: "json, name=EnableModbusTcp" })
  enableModbusTcp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=InputConfiguration", elemType: InputConfigurationContainer })
  inputConfiguration?: InputConfigurationContainer[];

  @SpeakeasyMetadata({ data: "json, name=OutputConfiguration", elemType: OutputConfigurationContainer })
  outputConfiguration?: OutputConfigurationContainer[];

  @SpeakeasyMetadata({ data: "json, name=ShowReactiveEnergy" })
  showReactiveEnergy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SwitchConfiguration", elemType: SwitchConfigurationContainer })
  switchConfiguration?: SwitchConfigurationContainer[];

  @SpeakeasyMetadata({ data: "json, name=UploadInterval" })
  uploadInterval?: SmartMeDeviceConfigurationContainerUploadIntervalEnum;
}
