from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JobInfoJobInfoErrors:
    r"""JobInfoJobInfoErrors
    The job infos' errors
    """
    
    error: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    
class JobInfoJobInfoJobStatusEnum(str, Enum):
    NEW = "New"
    PENDING = "Pending"
    IN_PROGRESS = "InProgress"
    SUCCESS = "Success"
    FAILED = "Failed"
    ON_HOLD = "OnHold"


@dataclass_json
@dataclass
class JobInfoJobInfo:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    employer_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployerKey') }})
    errors: Optional[JobInfoJobInfoErrors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    holding_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HoldingDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    job_status: Optional[JobInfoJobInfoJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobStatus') }})
    job_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobType') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    progress: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Progress') }})
    

@dataclass_json
@dataclass
class JobInfo:
    job_info: Optional[JobInfoJobInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobInfo') }})
    
