package shared

type TflAPIPresentationEntitiesPeriodTypeEnum string

const (
	TflAPIPresentationEntitiesPeriodTypeEnumNormal           TflAPIPresentationEntitiesPeriodTypeEnum = "Normal"
	TflAPIPresentationEntitiesPeriodTypeEnumFrequencyHours   TflAPIPresentationEntitiesPeriodTypeEnum = "FrequencyHours"
	TflAPIPresentationEntitiesPeriodTypeEnumFrequencyMinutes TflAPIPresentationEntitiesPeriodTypeEnum = "FrequencyMinutes"
	TflAPIPresentationEntitiesPeriodTypeEnumUnknown          TflAPIPresentationEntitiesPeriodTypeEnum = "Unknown"
)

type TflAPIPresentationEntitiesPeriod struct {
	Frequency *TflAPIPresentationEntitiesServiceFrequency        `json:"frequency"`
	FromTime  *TflAPIPresentationEntitiesTwentyFourHourClockTime `json:"fromTime"`
	ToTime    *TflAPIPresentationEntitiesTwentyFourHourClockTime `json:"toTime"`
	Type      *TflAPIPresentationEntitiesPeriodTypeEnum          `json:"type"`
}
