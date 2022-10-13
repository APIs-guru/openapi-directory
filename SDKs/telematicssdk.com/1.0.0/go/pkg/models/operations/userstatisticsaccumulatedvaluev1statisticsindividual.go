package operations

type UserStatisticsAccumulatedValueV1StatisticsIndividualQueryParams struct {
	EndDate   *string `queryParam:"style=form,explode=true,name=endDate"`
	StartDate *string `queryParam:"style=form,explode=true,name=startDate"`
}

type UserStatisticsAccumulatedValueV1StatisticsIndividualRequest struct {
	QueryParams UserStatisticsAccumulatedValueV1StatisticsIndividualQueryParams
}

type UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSONResult struct {
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
	RushHoursDrivingTime            *float64 `json:"RushHoursDrivingTime"`
	TotalSpeedingKm                 *float64 `json:"TotalSpeedingKm"`
	TotalSpeedingMile               *float64 `json:"TotalSpeedingMile"`
	TripsCount                      *float64 `json:"TripsCount"`
}

type UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSON struct {
	Errors []interface{}                                                                 `json:"Errors"`
	Result *UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSONResult `json:"Result"`
	Status *float64                                                                      `json:"Status"`
	Title  *string                                                                       `json:"Title"`
}

type UserStatisticsAccumulatedValueV1StatisticsIndividualResponse struct {
	ContentType                                                                  string
	Headers                                                                      map[string][]string
	StatusCode                                                                   int64
	UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSONObject *UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSON
}
