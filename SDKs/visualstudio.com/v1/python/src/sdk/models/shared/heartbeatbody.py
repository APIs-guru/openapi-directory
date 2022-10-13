from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import collecteddata


@dataclass_json
@dataclass
class HeartBeatBody:
    agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentVersion' }})
    collected_data_list: Optional[List[collecteddata.CollectedData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectedDataList' }})
    environment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentId' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    time_stamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeStamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
