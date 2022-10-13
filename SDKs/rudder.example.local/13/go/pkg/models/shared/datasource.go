package shared

type DatasourceRunParametersScheduleTypeEnum string

const (
	DatasourceRunParametersScheduleTypeEnumScheduled    DatasourceRunParametersScheduleTypeEnum = "scheduled"
	DatasourceRunParametersScheduleTypeEnumNotscheduled DatasourceRunParametersScheduleTypeEnum = "notscheduled"
)

type DatasourceRunParametersSchedule struct {
	Type *DatasourceRunParametersScheduleTypeEnum `json:"type"`
}

type DatasourceRunParameters struct {
	OnGeneration *bool                            `json:"onGeneration"`
	OnNewNode    *bool                            `json:"onNewNode"`
	Schedule     *DatasourceRunParametersSchedule `json:"schedule"`
}

type DatasourceTypeNameEnum string

const (
	DatasourceTypeNameEnumHTTP DatasourceTypeNameEnum = "HTTP"
)

type DatasourceTypeParametersHeaders struct {
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type DatasourceTypeParametersRequestMethodEnum string

const (
	DatasourceTypeParametersRequestMethodEnumGet  DatasourceTypeParametersRequestMethodEnum = "GET"
	DatasourceTypeParametersRequestMethodEnumPost DatasourceTypeParametersRequestMethodEnum = "POST"
)

type DatasourceTypeParametersRequestModeNameEnum string

const (
	DatasourceTypeParametersRequestModeNameEnumByNode DatasourceTypeParametersRequestModeNameEnum = "byNode"
)

type DatasourceTypeParametersRequestMode struct {
	Name *DatasourceTypeParametersRequestModeNameEnum `json:"name"`
}

type DatasourceTypeParameters struct {
	CheckSsl       *bool                                      `json:"checkSsl"`
	Headers        []DatasourceTypeParametersHeaders          `json:"headers"`
	Path           *string                                    `json:"path"`
	RequestMethod  *DatasourceTypeParametersRequestMethodEnum `json:"requestMethod"`
	RequestMode    *DatasourceTypeParametersRequestMode       `json:"requestMode"`
	RequestTimeout *int64                                     `json:"requestTimeout"`
	URL            *string                                    `json:"url"`
}

type DatasourceType struct {
	Name       *DatasourceTypeNameEnum   `json:"name"`
	Parameters *DatasourceTypeParameters `json:"parameters"`
}

type Datasource struct {
	Description   *string                  `json:"description"`
	Enabled       *bool                    `json:"enabled"`
	ID            *string                  `json:"id"`
	Name          *string                  `json:"name"`
	RunParameters *DatasourceRunParameters `json:"runParameters"`
	Type          *DatasourceType          `json:"type"`
	UpdateTimeout *int64                   `json:"updateTimeout"`
}
