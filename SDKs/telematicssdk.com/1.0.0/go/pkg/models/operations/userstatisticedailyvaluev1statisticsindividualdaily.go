package operations

type UserStatisticeDailyValueV1StatisticsIndividualDailyQueryParams struct {
	EndDate   *string `queryParam:"style=form,explode=true,name=endDate"`
	StartDate *string `queryParam:"style=form,explode=true,name=startDate"`
}

type UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSONResult struct {
	AccelerationCount               *float64 `json:"AccelerationCount,omitempty"`
	AppID                           *string  `json:"AppId,omitempty"`
	AverageSpeedKmh                 *float64 `json:"AverageSpeedKmh,omitempty"`
	AverageSpeedMileh               *float64 `json:"AverageSpeedMileh,omitempty"`
	BreakingCount                   *float64 `json:"BreakingCount,omitempty"`
	CompanyID                       *string  `json:"CompanyId,omitempty"`
	CorneringCount                  *float64 `json:"CorneringCount,omitempty"`
	DayDrivingTime                  *float64 `json:"DayDrivingTime,omitempty"`
	DeviceToken                     *string  `json:"DeviceToken,omitempty"`
	DriverTripsCount                *float64 `json:"DriverTripsCount,omitempty"`
	DrivingTime                     *float64 `json:"DrivingTime,omitempty"`
	InstanceID                      *string  `json:"InstanceId,omitempty"`
	MaxSpeedKmh                     *float64 `json:"MaxSpeedKmh,omitempty"`
	MaxSpeedMileh                   *float64 `json:"MaxSpeedMileh,omitempty"`
	MileageKm                       *float64 `json:"MileageKm,omitempty"`
	MileageMile                     *float64 `json:"MileageMile,omitempty"`
	NightDrivingTime                *float64 `json:"NightDrivingTime,omitempty"`
	OtherTripsCount                 *float64 `json:"OtherTripsCount,omitempty"`
	PhoneUsageDistanceKm            *float64 `json:"PhoneUsageDistanceKm,omitempty"`
	PhoneUsageDistanceMile          *float64 `json:"PhoneUsageDistanceMile,omitempty"`
	PhoneUsageDurationMin           *float64 `json:"PhoneUsageDurationMin,omitempty"`
	PhoneUsageOverSpeedDistanceKm   *float64 `json:"PhoneUsageOverSpeedDistanceKm,omitempty"`
	PhoneUsageOverSpeedDistanceMile *float64 `json:"PhoneUsageOverSpeedDistanceMile,omitempty"`
	PhoneUsageOverSpeedDurationMin  *float64 `json:"PhoneUsageOverSpeedDurationMin,omitempty"`
	ReportDate                      *string  `json:"ReportDate,omitempty"`
	RushHoursDrivingTime            *float64 `json:"RushHoursDrivingTime,omitempty"`
	TotalSpeedingKm                 *float64 `json:"TotalSpeedingKm,omitempty"`
	TotalSpeedingMile               *float64 `json:"TotalSpeedingMile,omitempty"`
	TripsCount                      *float64 `json:"TripsCount,omitempty"`
}

type UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSON struct {
	Errors []interface{}                                                                 `json:"Errors,omitempty"`
	Result []UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSONResult `json:"Result,omitempty"`
	Status *float64                                                                      `json:"Status,omitempty"`
	Title  *string                                                                       `json:"Title,omitempty"`
}

type UserStatisticeDailyValueV1StatisticsIndividualDailyRequest struct {
	QueryParams UserStatisticeDailyValueV1StatisticsIndividualDailyQueryParams
}

type UserStatisticeDailyValueV1StatisticsIndividualDailyResponse struct {
	ContentType                                                                 string
	Headers                                                                     map[string][]string
	StatusCode                                                                  int64
	UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSONObject *UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSON
}
