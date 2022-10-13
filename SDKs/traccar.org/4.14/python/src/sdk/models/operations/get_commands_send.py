from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCommandsSendQueryParams:
    device_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCommandsSendRequest:
    query_params: GetCommandsSendQueryParams = field(default=None)
    

@dataclass
class GetCommandsSendResponse:
    commands: Optional[List[shared.Command]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
