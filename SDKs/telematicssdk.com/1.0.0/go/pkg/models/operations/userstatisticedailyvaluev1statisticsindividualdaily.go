package operations

type UserStatisticeDailyValueV1StatisticsIndividualDailyQueryParams struct {
	EndDate   *string `queryParam:"style=form,explode=true,name=endDate"`
	StartDate *string `queryParam:"style=form,explode=true,name=startDate"`
}

type UserStatisticeDailyValueV1StatisticsIndividualDailyRequest struct {
	QueryParams UserStatisticeDailyValueV1StatisticsIndividualDailyQueryParams
}

type UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSONResult struct {
	AccelerationCount               *float64 `json:"AccelerationCount"`
	AppID                           *string  `json:"AppId"`
	AverageSpeedKmh                 *float64 `json:"AverageSpeedKmh"`
	AverageSpeedMileh               *float64 `json:"AverageSpeedMileh"`
	BreakingCount                   *float64 `json:"BreakingCount"`
	CompanyID                       *string  `json:"CompanyId"`
	CorneringCount                  *float64 `json:"CorneringCount"`
	DayDrivingTime                  *float64 `json:"DayDrivingTime"`
	DeviceToken                     *string  `json:"DeviceToken"`
	DriverTripsCount                *float64 `json:"DriverTripsCount"`
	DrivingTime                     *float64 `json:"DrivingTime"`
	InstanceID                      *string  `json:"InstanceId"`
	MaxSpeedKmh                     *float64 `json:"MaxSpeedKmh"`
	MaxSpeedMileh                   *float64 `json:"MaxSpeedMileh"`
	MileageKm                       *float64 `json:"MileageKm"`
	MileageMile                     *float64 `json:"MileageMile"`
	NightDrivingTime                *float64 `json:"NightDrivingTime"`
	OtherTripsCount                 *float64 `json:"OtherTripsCount"`
	PhoneUsageDistanceKm            *float64 `json:"PhoneUsageDistanceKm"`
	PhoneUsageDistanceMile          *float64 `json:"PhoneUsageDistanceMile"`
	PhoneUsageDurationMin           *float64 `json:"PhoneUsageDurationMin"`
	PhoneUsageOverSpeedDistanceKm   *float64 `json:"PhoneUsageOverSpeedDistanceKm"`
	PhoneUsageOverSpeedDistanceMile *float64 `json:"PhoneUsageOverSpeedDistanceMile"`
	PhoneUsageOverSpeedDurationMin  *float64 `json:"PhoneUsageOverSpeedDurationMin"`
	ReportDate                      *string  `json:"ReportDate"`
	RushHoursDrivingTime            *float64 `json:"RushHoursDrivingTime"`
	TotalSpeedingKm                 *float64 `json:"TotalSpeedingKm"`
	TotalSpeedingMile               *float64 `json:"TotalSpeedingMile"`
	TripsCount                      *float64 `json:"TripsCount"`
}

type UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSON struct {
	Errors []interface{}                                                                 `json:"Errors"`
	Result []UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSONResult `json:"Result"`
	Status *float64                                                                      `json:"Status"`
	Title  *string                                                                       `json:"Title"`
}

type UserStatisticeDailyValueV1StatisticsIndividualDailyResponse struct {
	ContentType                                                                 string
	Headers                                                                     map[string][]string
	StatusCode                                                                  int64
	UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSONObject *UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSON
}
