from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class WrongInputInputEnum(str, Enum):
    DOCUMENT_EXPEDITION_DATE = "document_expedition_date"


@dataclass_json
@dataclass
class WrongInput:
    input: Optional[WrongInputInputEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Input' }})
    
