from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetScriptsInstancesQueryParams:
    team_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'teamId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetScriptsInstancesRequest:
    query_params: GetScriptsInstancesQueryParams = field()
    

@dataclass
class GetScriptsInstancesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    script_instance_details: Optional[List[shared.ScriptInstanceDetails]] = field(default=None)
    
