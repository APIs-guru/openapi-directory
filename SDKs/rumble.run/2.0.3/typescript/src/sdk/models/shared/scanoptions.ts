import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ScanOptionsScanFrequencyEnum {
    Once = "once"
,    Hourly = "hourly"
,    Daily = "daily"
,    Weekly = "weekly"
,    Monthly = "monthly"
,    Continuous = "continuous"
}


export class ScanOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=agent" })
  agent?: string;

  @Metadata({ data: "json, name=excludes" })
  excludes?: string;

  @Metadata({ data: "json, name=max-group-size" })
  maxGroupSize?: string;

  @Metadata({ data: "json, name=max-host-rate" })
  maxHostRate?: string;

  @Metadata({ data: "json, name=max-sockets" })
  maxSockets?: string;

  @Metadata({ data: "json, name=nameservers" })
  nameservers?: string;

  @Metadata({ data: "json, name=passes" })
  passes?: string;

  @Metadata({ data: "json, name=probes" })
  probes?: string;

  @Metadata({ data: "json, name=rate" })
  rate?: string;

  @Metadata({ data: "json, name=scan-description" })
  scanDescription?: string;

  @Metadata({ data: "json, name=scan-frequency" })
  scanFrequency?: ScanOptionsScanFrequencyEnum;

  @Metadata({ data: "json, name=scan-grace-period" })
  scanGracePeriod?: string;

  @Metadata({ data: "json, name=scan-name" })
  scanName?: string;

  @Metadata({ data: "json, name=scan-start" })
  scanStart?: string;

  @Metadata({ data: "json, name=scan-tags" })
  scanTags?: string;

  @Metadata({ data: "json, name=screenshots" })
  screenshots?: string;

  @Metadata({ data: "json, name=targets" })
  targets: string;

  @Metadata({ data: "json, name=tcp-ports" })
  tcpPorts?: string;
}
