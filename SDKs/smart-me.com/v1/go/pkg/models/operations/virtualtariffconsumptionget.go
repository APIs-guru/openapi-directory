package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type VirtualTariffConsumptionGetQueryParams struct {
	EndDate   time.Time `queryParam:"style=form,explode=true,name=endDate"`
	FolderID  string    `queryParam:"style=form,explode=true,name=folderId"`
	StartDate time.Time `queryParam:"style=form,explode=true,name=startDate"`
}

type VirtualTariffConsumptionGetRequest struct {
	QueryParams VirtualTariffConsumptionGetQueryParams
}

type VirtualTariffConsumptionGetResponse struct {
	Body                         []byte
	ContentType                  string
	StatusCode                   int64
	VirtualTariffConsumptionData []shared.VirtualTariffConsumptionData
}
