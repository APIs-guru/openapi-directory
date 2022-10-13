package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualTariffGetResponse struct {
	Body                    []byte
	ContentType             string
	StatusCode              int64
	VirtualTariffsOfFolders []shared.VirtualTariffsOfFolder
}
