from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCommandsTypesQueryParams:
    device_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'protocol', 'style': 'form', 'explode': True }})
    text_channel: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'textChannel', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCommandsTypesRequest:
    query_params: GetCommandsTypesQueryParams = field()
    

@dataclass
class GetCommandsTypesResponse:
    content_type: str = field()
    status_code: int = field()
    command_types: Optional[List[shared.CommandType]] = field(default=None)
    
