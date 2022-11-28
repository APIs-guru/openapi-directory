from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ModelStatusEnum(str, Enum):
    QUEUED = "QUEUED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    KILLED = "KILLED"
    FAILED_WITH_RETRIES = "FAILED_WITH_RETRIES"


@dataclass_json
@dataclass
class Model:
    dataset_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetId') }})
    dataset_version_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetVersionId') }})
    model_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelId') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    status: ModelStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_msg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureMsg') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    model_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelType') }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
