from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesLineGroup:
    line_identifier: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineIdentifier' }})
    naptan_id_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'naptanIdReference' }})
    station_atco_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stationAtcoCode' }})
    
