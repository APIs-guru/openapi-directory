from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetScriptsInventoryResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    inventory_script_infos: Optional[List[shared.InventoryScriptInfo]] = field(default=None)
    status_code: int = field(default=None)
    
