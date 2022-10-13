from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import controllers_packagedetailitem


@dataclass_json
@dataclass
class ControllersPackageDetailResponse:
    data: Optional[controllers_packagedetailitem.ControllersPackageDetailItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
