package shared




type ScanOptionsScanFrequencyEnum string

const (
    ScanOptionsScanFrequencyEnumOnce ScanOptionsScanFrequencyEnum = "once"
ScanOptionsScanFrequencyEnumHourly ScanOptionsScanFrequencyEnum = "hourly"
ScanOptionsScanFrequencyEnumDaily ScanOptionsScanFrequencyEnum = "daily"
ScanOptionsScanFrequencyEnumWeekly ScanOptionsScanFrequencyEnum = "weekly"
ScanOptionsScanFrequencyEnumMonthly ScanOptionsScanFrequencyEnum = "monthly"
ScanOptionsScanFrequencyEnumContinuous ScanOptionsScanFrequencyEnum = "continuous"
)


type ScanOptions struct {
    Agent *string `json:"agent,omitempty"`
    Excludes *string `json:"excludes,omitempty"`
    MaxGroupSize *string `json:"max-group-size,omitempty"`
    MaxHostRate *string `json:"max-host-rate,omitempty"`
    MaxSockets *string `json:"max-sockets,omitempty"`
    Nameservers *string `json:"nameservers,omitempty"`
    Passes *string `json:"passes,omitempty"`
    Probes *string `json:"probes,omitempty"`
    Rate *string `json:"rate,omitempty"`
    ScanDescription *string `json:"scan-description,omitempty"`
    ScanFrequency *ScanOptionsScanFrequencyEnum `json:"scan-frequency,omitempty"`
    ScanGracePeriod *string `json:"scan-grace-period,omitempty"`
    ScanName *string `json:"scan-name,omitempty"`
    ScanStart *string `json:"scan-start,omitempty"`
    ScanTags *string `json:"scan-tags,omitempty"`
    Screenshots *string `json:"screenshots,omitempty"`
    Targets string `json:"targets"`
    TCPPorts *string `json:"tcp-ports,omitempty"`
    
}

