from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetNumbersAreacodes200ApplicationJSON:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class GetNumbersAreacodesResponse:
    content_type: str = field()
    status_code: int = field()
    get_numbers_areacodes_200_application_json_object: Optional[GetNumbersAreacodes200ApplicationJSON] = field(default=None)
    
