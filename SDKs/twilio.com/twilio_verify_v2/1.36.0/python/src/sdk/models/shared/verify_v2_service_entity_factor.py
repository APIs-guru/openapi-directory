from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import factor_enum_factor_types_enum
from . import factor_enum_factor_statuses_enum


@dataclass_json
@dataclass
class VerifyV2ServiceEntityFactor:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    config: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    entity_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_sid' }})
    factor_type: Optional[factor_enum_factor_types_enum.FactorEnumFactorTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'factor_type' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity' }})
    metadata: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    status: Optional[factor_enum_factor_statuses_enum.FactorEnumFactorStatusesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
