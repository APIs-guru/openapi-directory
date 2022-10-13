from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetZipArchivePathParams:
    archive_kind: shared.ArchiveKindEnum = field(default=None, metadata={'path_param': { 'field_name': 'archiveKind', 'style': 'simple', 'explode': False }})
    commit_id: str = field(default=None, metadata={'path_param': { 'field_name': 'commitId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetZipArchiveRequest:
    path_params: GetZipArchivePathParams = field(default=None)
    

@dataclass
class GetZipArchiveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_zip_archive_200_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    
