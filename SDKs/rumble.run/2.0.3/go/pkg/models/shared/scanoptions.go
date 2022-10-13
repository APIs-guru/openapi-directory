package shared

type ScanOptionsScanFrequencyEnum string

const (
	ScanOptionsScanFrequencyEnumOnce       ScanOptionsScanFrequencyEnum = "once"
	ScanOptionsScanFrequencyEnumHourly     ScanOptionsScanFrequencyEnum = "hourly"
	ScanOptionsScanFrequencyEnumDaily      ScanOptionsScanFrequencyEnum = "daily"
	ScanOptionsScanFrequencyEnumWeekly     ScanOptionsScanFrequencyEnum = "weekly"
	ScanOptionsScanFrequencyEnumMonthly    ScanOptionsScanFrequencyEnum = "monthly"
	ScanOptionsScanFrequencyEnumContinuous ScanOptionsScanFrequencyEnum = "continuous"
)

type ScanOptions struct {
	Agent           *string                       `json:"agent"`
	Excludes        *string                       `json:"excludes"`
	MaxGroupSize    *string                       `json:"max-group-size"`
	MaxHostRate     *string                       `json:"max-host-rate"`
	MaxSockets      *string                       `json:"max-sockets"`
	Nameservers     *string                       `json:"nameservers"`
	Passes          *string                       `json:"passes"`
	Probes          *string                       `json:"probes"`
	Rate            *string                       `json:"rate"`
	ScanDescription *string                       `json:"scan-description"`
	ScanFrequency   *ScanOptionsScanFrequencyEnum `json:"scan-frequency"`
	ScanGracePeriod *string                       `json:"scan-grace-period"`
	ScanName        *string                       `json:"scan-name"`
	ScanStart       *string                       `json:"scan-start"`
	ScanTags        *string                       `json:"scan-tags"`
	Screenshots     *string                       `json:"screenshots"`
	Targets         string                        `json:"targets"`
	TCPPorts        *string                       `json:"tcp-ports"`
}
