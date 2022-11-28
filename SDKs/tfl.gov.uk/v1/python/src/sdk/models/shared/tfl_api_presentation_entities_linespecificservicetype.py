from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesLineSpecificServiceType:
    service_type: Optional[TflAPIPresentationEntitiesLineServiceTypeInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceType') }})
    stop_serves_service_type: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopServesServiceType') }})
    
