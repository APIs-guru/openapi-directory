from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TrainResponseStatusEnum(str, Enum):
    QUEUED = "QUEUED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    KILLED = "KILLED"
    FAILED_WITH_RETRIES = "FAILED_WITH_RETRIES"


@dataclass_json
@dataclass
class TrainResponse:
    algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dataset_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetId' }})
    dataset_version_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetVersionId' }})
    epochs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'epochs' }})
    failure_msg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureMsg' }})
    language: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    learning_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learningRate' }})
    model_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelId' }})
    model_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelType' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    queue_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queuePosition' }})
    status: TrainResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    train_params: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainParams' }})
    train_stats: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainStats' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
