import { SpeakeasyBase } from "../../../internal/utils";
import { InputConfigurationContainer } from "./inputconfigurationcontainer";
import { OutputConfigurationContainer } from "./outputconfigurationcontainer";
import { SwitchConfigurationContainer } from "./switchconfigurationcontainer";
export declare enum SmartMeDeviceConfigurationContainerDnsUpdateStateEnum {
    NoUpdate = "NoUpdate",
    DnsUpdatePublicIp = "DnsUpdatePublicIp",
    DnsUpdateInternalIp = "DnsUpdateInternalIp"
}
export declare enum SmartMeDeviceConfigurationContainerUploadIntervalEnum {
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
/**
 * API Container class for the meter configuration
**/
export declare class SmartMeDeviceConfigurationContainer extends SpeakeasyBase {
    deviceEncryptionKey?: string;
    devicePinCode?: string;
    dnsUpdateState?: SmartMeDeviceConfigurationContainerDnsUpdateStateEnum;
    enableModbusTcp?: boolean;
    id?: string;
    inputConfiguration?: InputConfigurationContainer[];
    outputConfiguration?: OutputConfigurationContainer[];
    showReactiveEnergy?: boolean;
    switchConfiguration?: SwitchConfigurationContainer[];
    uploadInterval?: SmartMeDeviceConfigurationContainerUploadIntervalEnum;
}
