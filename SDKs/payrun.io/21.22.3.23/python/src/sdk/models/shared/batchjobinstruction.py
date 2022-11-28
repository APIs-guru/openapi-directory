from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchJobInstructionBatchJobInstructionDelete:
    r"""BatchJobInstructionBatchJobInstructionDelete
    The batch job instructions' instructions
    """
    
    delete: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DELETE') }})
    

@dataclass_json
@dataclass
class BatchJobInstructionBatchJobInstruction:
    holding_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HoldingDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    instructions: Optional[BatchJobInstructionBatchJobInstructionDelete] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Instructions') }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidateOnly') }})
    

@dataclass_json
@dataclass
class BatchJobInstruction:
    batch_job_instruction: Optional[BatchJobInstructionBatchJobInstruction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchJobInstruction') }})
    
