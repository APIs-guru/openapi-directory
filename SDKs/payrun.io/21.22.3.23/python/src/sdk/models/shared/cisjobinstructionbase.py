from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CisJobInstructionBaseCisJobInstructionBaseEmployerEmployer:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@href' }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@rel' }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@title' }})
    

@dataclass_json
@dataclass
class CisJobInstructionBaseCisJobInstructionBaseSubContractorsSubContractor:
    sub_contractor: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubContractor' }})
    

@dataclass_json
@dataclass
class CisJobInstructionBaseCisJobInstructionBaseCisJobInstructionBase:
    employer: Optional[CisJobInstructionBaseCisJobInstructionBaseEmployerEmployer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Employer' }})
    holding_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HoldingDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sub_contractors: Optional[CisJobInstructionBaseCisJobInstructionBaseSubContractorsSubContractor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubContractors' }})
    

@dataclass_json
@dataclass
class CisJobInstructionBase:
    cis_job_instruction_base: Optional[CisJobInstructionBaseCisJobInstructionBaseCisJobInstructionBase] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CisJobInstructionBase' }})
    
