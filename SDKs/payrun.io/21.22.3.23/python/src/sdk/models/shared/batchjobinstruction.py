from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchJobInstructionBatchJobInstructionInstructionsDelete:
    delete: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DELETE' }})
    

@dataclass_json
@dataclass
class BatchJobInstructionBatchJobInstructionBatchJobInstruction:
    holding_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HoldingDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    instructions: Optional[BatchJobInstructionBatchJobInstructionInstructionsDelete] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Instructions' }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidateOnly' }})
    

@dataclass_json
@dataclass
class BatchJobInstruction:
    batch_job_instruction: Optional[BatchJobInstructionBatchJobInstructionBatchJobInstruction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchJobInstruction' }})
    
