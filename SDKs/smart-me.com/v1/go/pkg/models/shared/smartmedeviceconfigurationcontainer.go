package shared

type SmartMeDeviceConfigurationContainerDNSUpdateStateEnum string

const (
	SmartMeDeviceConfigurationContainerDNSUpdateStateEnumNoUpdate            SmartMeDeviceConfigurationContainerDNSUpdateStateEnum = "NoUpdate"
	SmartMeDeviceConfigurationContainerDNSUpdateStateEnumDNSUpdatePublicIP   SmartMeDeviceConfigurationContainerDNSUpdateStateEnum = "DnsUpdatePublicIp"
	SmartMeDeviceConfigurationContainerDNSUpdateStateEnumDNSUpdateInternalIP SmartMeDeviceConfigurationContainerDNSUpdateStateEnum = "DnsUpdateInternalIp"
)

type SmartMeDeviceConfigurationContainerUploadIntervalEnum string

const (
	SmartMeDeviceConfigurationContainerUploadIntervalEnumUploadInterval1s    SmartMeDeviceConfigurationContainerUploadIntervalEnum = "UploadInterval_1s"
	SmartMeDeviceConfigurationContainerUploadIntervalEnumUploadInterval5s    SmartMeDeviceConfigurationContainerUploadIntervalEnum = "UploadInterval_5s"
	SmartMeDeviceConfigurationContainerUploadIntervalEnumUploadInterval10s   SmartMeDeviceConfigurationContainerUploadIntervalEnum = "UploadInterval_10s"
	SmartMeDeviceConfigurationContainerUploadIntervalEnumUploadInterval30s   SmartMeDeviceConfigurationContainerUploadIntervalEnum = "UploadInterval_30s"
	SmartMeDeviceConfigurationContainerUploadIntervalEnumUploadInterval60s   SmartMeDeviceConfigurationContainerUploadIntervalEnum = "UploadInterval_60s"
	SmartMeDeviceConfigurationContainerUploadIntervalEnumUploadInterval5min  SmartMeDeviceConfigurationContainerUploadIntervalEnum = "UploadInterval_5min"
	SmartMeDeviceConfigurationContainerUploadIntervalEnumUploadInterval15min SmartMeDeviceConfigurationContainerUploadIntervalEnum = "UploadInterval_15min"
	SmartMeDeviceConfigurationContainerUploadIntervalEnumUploadInterval30min SmartMeDeviceConfigurationContainerUploadIntervalEnum = "UploadInterval_30min"
	SmartMeDeviceConfigurationContainerUploadIntervalEnumUploadInterval60min SmartMeDeviceConfigurationContainerUploadIntervalEnum = "UploadInterval_60min"
	SmartMeDeviceConfigurationContainerUploadIntervalEnumUploadInterval6h    SmartMeDeviceConfigurationContainerUploadIntervalEnum = "UploadInterval_6h"
	SmartMeDeviceConfigurationContainerUploadIntervalEnumUploadInterval12h   SmartMeDeviceConfigurationContainerUploadIntervalEnum = "UploadInterval_12h"
	SmartMeDeviceConfigurationContainerUploadIntervalEnumUploadInterval24h   SmartMeDeviceConfigurationContainerUploadIntervalEnum = "UploadInterval_24h"
)

type SmartMeDeviceConfigurationContainer struct {
	DeviceEncryptionKey *string                                                `json:"DeviceEncryptionKey"`
	DevicePinCode       *string                                                `json:"DevicePinCode"`
	DNSUpdateState      *SmartMeDeviceConfigurationContainerDNSUpdateStateEnum `json:"DnsUpdateState"`
	EnableModbusTCP     *bool                                                  `json:"EnableModbusTcp"`
	ID                  *string                                                `json:"Id"`
	InputConfiguration  []InputConfigurationContainer                          `json:"InputConfiguration"`
	OutputConfiguration []OutputConfigurationContainer                         `json:"OutputConfiguration"`
	ShowReactiveEnergy  *bool                                                  `json:"ShowReactiveEnergy"`
	SwitchConfiguration []SwitchConfigurationContainer                         `json:"SwitchConfiguration"`
	UploadInterval      *SmartMeDeviceConfigurationContainerUploadIntervalEnum `json:"UploadInterval"`
}
