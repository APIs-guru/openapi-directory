import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ScanOptionsScanFrequencyEnum {
    Once = "once",
    Hourly = "hourly",
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly",
    Continuous = "continuous"
}


export class ScanOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agent" })
  agent?: string;

  @SpeakeasyMetadata({ data: "json, name=excludes" })
  excludes?: string;

  @SpeakeasyMetadata({ data: "json, name=max-group-size" })
  maxGroupSize?: string;

  @SpeakeasyMetadata({ data: "json, name=max-host-rate" })
  maxHostRate?: string;

  @SpeakeasyMetadata({ data: "json, name=max-sockets" })
  maxSockets?: string;

  @SpeakeasyMetadata({ data: "json, name=nameservers" })
  nameservers?: string;

  @SpeakeasyMetadata({ data: "json, name=passes" })
  passes?: string;

  @SpeakeasyMetadata({ data: "json, name=probes" })
  probes?: string;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: string;

  @SpeakeasyMetadata({ data: "json, name=scan-description" })
  scanDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=scan-frequency" })
  scanFrequency?: ScanOptionsScanFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=scan-grace-period" })
  scanGracePeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=scan-name" })
  scanName?: string;

  @SpeakeasyMetadata({ data: "json, name=scan-start" })
  scanStart?: string;

  @SpeakeasyMetadata({ data: "json, name=scan-tags" })
  scanTags?: string;

  @SpeakeasyMetadata({ data: "json, name=screenshots" })
  screenshots?: string;

  @SpeakeasyMetadata({ data: "json, name=targets" })
  targets: string;

  @SpeakeasyMetadata({ data: "json, name=tcp-ports" })
  tcpPorts?: string;
}
