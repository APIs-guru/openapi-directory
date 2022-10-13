from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dataitem
from . import hierarchicalinterview


@dataclass_json
@dataclass
class Interview:
    data_items: Optional[List[dataitem.DataItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataItems' }})
    hierarchical_interviews: Optional[List[hierarchicalinterview.HierarchicalInterview]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hierarchicalInterviews' }})
    ident: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ident' }})
    
