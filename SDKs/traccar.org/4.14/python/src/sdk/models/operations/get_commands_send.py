from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCommandsSendQueryParams:
    device_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCommandsSendRequest:
    query_params: GetCommandsSendQueryParams = field()
    

@dataclass
class GetCommandsSendResponse:
    content_type: str = field()
    status_code: int = field()
    commands: Optional[List[shared.Command]] = field(default=None)
    
