package operations

import (
	"openapi/pkg/models/shared"
)

type GetZipArchivePathParams struct {
	ArchiveKind shared.ArchiveKindEnum `pathParam:"style=simple,explode=false,name=archiveKind"`
	CommitID    string                 `pathParam:"style=simple,explode=false,name=commitId"`
}

type GetZipArchiveRequest struct {
	PathParams GetZipArchivePathParams
}

type GetZipArchiveResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	GetZipArchive200ApplicationOctetStreamBinaryString []byte
}
