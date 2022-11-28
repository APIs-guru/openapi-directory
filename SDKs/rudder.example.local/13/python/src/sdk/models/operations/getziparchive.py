from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetZipArchivePathParams:
    archive_kind: shared.ArchiveKindEnum = field(metadata={'path_param': { 'field_name': 'archiveKind', 'style': 'simple', 'explode': False }})
    commit_id: str = field(metadata={'path_param': { 'field_name': 'commitId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetZipArchiveRequest:
    path_params: GetZipArchivePathParams = field()
    

@dataclass
class GetZipArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    get_zip_archive_200_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    
