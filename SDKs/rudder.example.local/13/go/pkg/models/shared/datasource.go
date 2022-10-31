package shared




type DatasourceRunParametersScheduleTypeEnum string

const (
    DatasourceRunParametersScheduleTypeEnumScheduled DatasourceRunParametersScheduleTypeEnum = "scheduled"
DatasourceRunParametersScheduleTypeEnumNotscheduled DatasourceRunParametersScheduleTypeEnum = "notscheduled"
)


type DatasourceRunParametersSchedule struct {
    Type *DatasourceRunParametersScheduleTypeEnum `json:"type,omitempty"`
    
}

type DatasourceRunParameters struct {
    OnGeneration *bool `json:"onGeneration,omitempty"`
    OnNewNode *bool `json:"onNewNode,omitempty"`
    Schedule *DatasourceRunParametersSchedule `json:"schedule,omitempty"`
    
}


type DatasourceTypeNameEnum string

const (
    DatasourceTypeNameEnumHTTP DatasourceTypeNameEnum = "HTTP"
)


type DatasourceTypeParametersHeaders struct {
    Name *string `json:"name,omitempty"`
    Value *string `json:"value,omitempty"`
    
}


type DatasourceTypeParametersRequestMethodEnum string

const (
    DatasourceTypeParametersRequestMethodEnumGet DatasourceTypeParametersRequestMethodEnum = "GET"
DatasourceTypeParametersRequestMethodEnumPost DatasourceTypeParametersRequestMethodEnum = "POST"
)



type DatasourceTypeParametersRequestModeNameEnum string

const (
    DatasourceTypeParametersRequestModeNameEnumByNode DatasourceTypeParametersRequestModeNameEnum = "byNode"
)


type DatasourceTypeParametersRequestMode struct {
    Name *DatasourceTypeParametersRequestModeNameEnum `json:"name,omitempty"`
    
}

type DatasourceTypeParameters struct {
    CheckSsl *bool `json:"checkSsl,omitempty"`
    Headers []DatasourceTypeParametersHeaders `json:"headers,omitempty"`
    Path *string `json:"path,omitempty"`
    RequestMethod *DatasourceTypeParametersRequestMethodEnum `json:"requestMethod,omitempty"`
    RequestMode *DatasourceTypeParametersRequestMode `json:"requestMode,omitempty"`
    RequestTimeout *int64 `json:"requestTimeout,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type DatasourceType struct {
    Name *DatasourceTypeNameEnum `json:"name,omitempty"`
    Parameters *DatasourceTypeParameters `json:"parameters,omitempty"`
    
}

type Datasource struct {
    Description *string `json:"description,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    RunParameters *DatasourceRunParameters `json:"runParameters,omitempty"`
    Type *DatasourceType `json:"type,omitempty"`
    UpdateTimeout *int64 `json:"updateTimeout,omitempty"`
    
}

