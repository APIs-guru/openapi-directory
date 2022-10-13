from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import controllers_advisorydetailitem


@dataclass_json
@dataclass
class ControllersAdvisoryDetailResponse:
    data: Optional[controllers_advisorydetailitem.ControllersAdvisoryDetailItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
