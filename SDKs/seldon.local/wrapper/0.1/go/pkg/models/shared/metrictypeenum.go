package shared

type MetricTypeEnum string

const (
	MetricTypeEnumCounter MetricTypeEnum = "COUNTER"
	MetricTypeEnumGauge   MetricTypeEnum = "GAUGE"
	MetricTypeEnumTimer   MetricTypeEnum = "TIMER"
)
