import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ScanOptionsScanFrequencyEnum {
    Once = "once",
    Hourly = "hourly",
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly",
    Continuous = "continuous"
}
export declare class ScanOptions extends SpeakeasyBase {
    agent?: string;
    excludes?: string;
    maxGroupSize?: string;
    maxHostRate?: string;
    maxSockets?: string;
    nameservers?: string;
    passes?: string;
    probes?: string;
    rate?: string;
    scanDescription?: string;
    scanFrequency?: ScanOptionsScanFrequencyEnum;
    scanGracePeriod?: string;
    scanName?: string;
    scanStart?: string;
    scanTags?: string;
    screenshots?: string;
    targets: string;
    tcpPorts?: string;
}
