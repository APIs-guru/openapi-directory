package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualTariffsForPropertyGetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type VirtualTariffsForPropertyGetRequest struct {
	PathParams VirtualTariffsForPropertyGetPathParams
}

type VirtualTariffsForPropertyGetResponse struct {
	Body                    []byte
	ContentType             string
	StatusCode              int64
	VirtualTariffsOfFolders []shared.VirtualTariffsOfFolder
}
