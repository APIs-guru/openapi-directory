from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetNumbersAreacodes200ApplicationJSON:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class GetNumbersAreacodesResponse:
    content_type: str = field(default=None)
    get_numbers_areacodes_200_application_json_object: Optional[GetNumbersAreacodes200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
