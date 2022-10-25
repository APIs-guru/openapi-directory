from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CisJobInstructionBaseCisJobInstructionBaseEmployer:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@href' }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@rel' }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@title' }})
    

@dataclass_json
@dataclass
class CisJobInstructionBaseCisJobInstructionBaseSubContractor:
    sub_contractor: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubContractor' }})
    

@dataclass_json
@dataclass
class CisJobInstructionBaseCisJobInstructionBase:
    employer: Optional[CisJobInstructionBaseCisJobInstructionBaseEmployer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Employer' }})
    holding_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HoldingDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sub_contractors: Optional[CisJobInstructionBaseCisJobInstructionBaseSubContractor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubContractors' }})
    

@dataclass_json
@dataclass
class CisJobInstructionBase:
    cis_job_instruction_base: Optional[CisJobInstructionBaseCisJobInstructionBase] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CisJobInstructionBase' }})
    
