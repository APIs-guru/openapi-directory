package shared

type TflAPIPresentationEntitiesPeriodTypeEnum string

const (
	TflAPIPresentationEntitiesPeriodTypeEnumNormal           TflAPIPresentationEntitiesPeriodTypeEnum = "Normal"
	TflAPIPresentationEntitiesPeriodTypeEnumFrequencyHours   TflAPIPresentationEntitiesPeriodTypeEnum = "FrequencyHours"
	TflAPIPresentationEntitiesPeriodTypeEnumFrequencyMinutes TflAPIPresentationEntitiesPeriodTypeEnum = "FrequencyMinutes"
	TflAPIPresentationEntitiesPeriodTypeEnumUnknown          TflAPIPresentationEntitiesPeriodTypeEnum = "Unknown"
)

type TflAPIPresentationEntitiesPeriod struct {
	Frequency *TflAPIPresentationEntitiesServiceFrequency        `json:"frequency,omitempty"`
	FromTime  *TflAPIPresentationEntitiesTwentyFourHourClockTime `json:"fromTime,omitempty"`
	ToTime    *TflAPIPresentationEntitiesTwentyFourHourClockTime `json:"toTime,omitempty"`
	Type      *TflAPIPresentationEntitiesPeriodTypeEnum          `json:"type,omitempty"`
}
