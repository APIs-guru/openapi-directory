package operations



type GetDeviceEnergyUsagePathParams struct {
    DeviceID int32 `pathParam:"style=simple,explode=false,name=deviceId"`
    
}


type GetDeviceEnergyUsageBasisEnum string

const (
    GetDeviceEnergyUsageBasisEnumMonthly GetDeviceEnergyUsageBasisEnum = "MONTHLY"
GetDeviceEnergyUsageBasisEnumDaily GetDeviceEnergyUsageBasisEnum = "DAILY"
GetDeviceEnergyUsageBasisEnumHourly GetDeviceEnergyUsageBasisEnum = "HOURLY"
)



type GetDeviceEnergyUsageRollPeriodEnum string

const (
    GetDeviceEnergyUsageRollPeriodEnumOneDay GetDeviceEnergyUsageRollPeriodEnum = "ONE_DAY"
GetDeviceEnergyUsageRollPeriodEnumOneWeek GetDeviceEnergyUsageRollPeriodEnum = "ONE_WEEK"
GetDeviceEnergyUsageRollPeriodEnumOneMonth GetDeviceEnergyUsageRollPeriodEnum = "ONE_MONTH"
GetDeviceEnergyUsageRollPeriodEnumSixMonths GetDeviceEnergyUsageRollPeriodEnum = "SIX_MONTHS"
GetDeviceEnergyUsageRollPeriodEnumOneYear GetDeviceEnergyUsageRollPeriodEnum = "ONE_YEAR"
)


type GetDeviceEnergyUsageQueryParams struct {
    Basis *GetDeviceEnergyUsageBasisEnum `queryParam:"style=form,explode=true,name=basis"`
    RollPeriod *GetDeviceEnergyUsageRollPeriodEnum `queryParam:"style=form,explode=true,name=rollPeriod"`
    
}

type GetDeviceEnergyUsageRequest struct {
    PathParams GetDeviceEnergyUsagePathParams 
    QueryParams GetDeviceEnergyUsageQueryParams 
    
}

type GetDeviceEnergyUsageResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

