from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPermissionsHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetPermissionsRequest:
    headers: GetPermissionsHeaders = field(default=None)
    

@dataclass
class GetPermissionsResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    status_code: int = field(default=None)
    
