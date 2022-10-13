from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import controllers_systempackagedata
from . import controllers_links
from . import controllers_listmeta


@dataclass_json
@dataclass
class ControllersSystemPackageResponse:
    data: Optional[List[controllers_systempackagedata.ControllersSystemPackageData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: Optional[controllers_links.ControllersLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: Optional[controllers_listmeta.ControllersListMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    
