from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JobInfoJobInfoErrorsErrors:
    error: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    
class JobInfoJobInfoJobStatusJobStatusEnum(str, Enum):
    NEW = "New"
    PENDING = "Pending"
    IN_PROGRESS = "InProgress"
    SUCCESS = "Success"
    FAILED = "Failed"
    ON_HOLD = "OnHold"


@dataclass_json
@dataclass
class JobInfoJobInfoJobInfo:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    employer_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmployerKey' }})
    errors: Optional[JobInfoJobInfoErrorsErrors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    holding_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HoldingDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    job_status: Optional[JobInfoJobInfoJobStatusJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobStatus' }})
    job_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobType' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    progress: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Progress' }})
    

@dataclass_json
@dataclass
class JobInfo:
    job_info: Optional[JobInfoJobInfoJobInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobInfo' }})
    
