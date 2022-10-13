from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import chartfavstarresponseresult


@dataclass_json
@dataclass
class GetFavStarIdsSchema:
    result: Optional[List[chartfavstarresponseresult.ChartFavStarResponseResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
