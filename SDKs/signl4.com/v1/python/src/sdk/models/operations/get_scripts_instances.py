from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetScriptsInstancesQueryParams:
    team_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'teamId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetScriptsInstancesRequest:
    query_params: GetScriptsInstancesQueryParams = field(default=None)
    

@dataclass
class GetScriptsInstancesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    script_instance_details: Optional[List[shared.ScriptInstanceDetails]] = field(default=None)
    status_code: int = field(default=None)
    
