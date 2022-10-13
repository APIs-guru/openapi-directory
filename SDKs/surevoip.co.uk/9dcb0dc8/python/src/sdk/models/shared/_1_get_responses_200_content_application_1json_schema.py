from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OneGetResponses200ContentApplication1jsonSchemaStatusEnum(str, Enum):
    OK = "OK"


@dataclass_json
@dataclass
class OneGetResponses200ContentApplication1jsonSchema:
    status: Optional[OneGetResponses200ContentApplication1jsonSchemaStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
