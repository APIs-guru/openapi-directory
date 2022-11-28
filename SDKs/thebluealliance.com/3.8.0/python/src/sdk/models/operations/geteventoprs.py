from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventOpRsPathParams:
    event_key: str = field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventOpRsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventOpRsSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventOpRsRequest:
    headers: GetEventOpRsHeaders = field()
    path_params: GetEventOpRsPathParams = field()
    security: GetEventOpRsSecurity = field()
    

@dataclass
class GetEventOpRsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    event_op_rs: Optional[shared.EventOpRs] = field(default=None)
    
