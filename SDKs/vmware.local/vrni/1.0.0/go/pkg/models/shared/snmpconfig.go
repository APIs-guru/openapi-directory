package shared




type SnmpConfigSnmpVersionEnum string

const (
    SnmpConfigSnmpVersionEnumV2c SnmpConfigSnmpVersionEnum = "v2c"
SnmpConfigSnmpVersionEnumV3 SnmpConfigSnmpVersionEnum = "v3"
)


type SnmpConfig struct {
    ConfigSnmp2c *Snmp2cConfig `json:"config_snmp_2c,omitempty"`
    ConfigSnmp3 *Snmp3Config `json:"config_snmp_3,omitempty"`
    SnmpEnabled *bool `json:"snmp_enabled,omitempty"`
    SnmpVersion *SnmpConfigSnmpVersionEnum `json:"snmp_version,omitempty"`
    
}

