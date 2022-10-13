from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetScriptsInventoryParsedQueryParams:
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    

@dataclass
class GetScriptsInventoryParsedRequest:
    query_params: GetScriptsInventoryParsedQueryParams = field(default=None)
    

@dataclass
class GetScriptsInventoryParsedResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    inventory_script_infos: Optional[List[shared.InventoryScriptInfo]] = field(default=None)
    status_code: int = field(default=None)
    
