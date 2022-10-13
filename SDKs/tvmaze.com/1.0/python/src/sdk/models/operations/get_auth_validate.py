from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetAuthValidate200ApplicationJSON:
    premium: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'premium' }})
    

@dataclass
class GetAuthValidateResponse:
    content_type: str = field(default=None)
    get_auth_validate_200_application_json_object: Optional[GetAuthValidate200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
