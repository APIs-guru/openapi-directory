from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import odataerror


@dataclass_json
@dataclass
class GraphError:
    odata_error: Optional[odataerror.OdataError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'odata.error' }})
    
