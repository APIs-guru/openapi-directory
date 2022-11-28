from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CisJobInstructionBaseCisJobInstructionBaseEmployer:
    r"""CisJobInstructionBaseCisJobInstructionBaseEmployer
    The cis job instruction bases' employer
    """
    
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclass
class CisJobInstructionBaseCisJobInstructionBaseSubContractor:
    r"""CisJobInstructionBaseCisJobInstructionBaseSubContractor
    The cis job instruction bases' sub contractors
    """
    
    sub_contractor: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubContractor') }})
    

@dataclass_json
@dataclass
class CisJobInstructionBaseCisJobInstructionBase:
    employer: Optional[CisJobInstructionBaseCisJobInstructionBaseEmployer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Employer') }})
    holding_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HoldingDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sub_contractors: Optional[CisJobInstructionBaseCisJobInstructionBaseSubContractor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubContractors') }})
    

@dataclass_json
@dataclass
class CisJobInstructionBase:
    cis_job_instruction_base: Optional[CisJobInstructionBaseCisJobInstructionBase] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CisJobInstructionBase') }})
    
