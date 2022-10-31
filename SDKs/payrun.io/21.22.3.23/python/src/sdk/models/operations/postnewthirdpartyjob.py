from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostNewThirdPartyJobHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostNewThirdPartyJobRequest:
    headers: PostNewThirdPartyJobHeaders = field(default=None)
    request: shared.ThirdPartyJobInstruction = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostNewThirdPartyJobResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    status_code: int = field(default=None)
    
