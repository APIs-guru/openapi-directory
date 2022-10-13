from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import challenge_enum_factor_types_enum
from . import challenge_enum_challenge_reasons_enum
from . import challenge_enum_challenge_statuses_enum


@dataclass_json
@dataclass
class VerifyV2ServiceEntityChallenge:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_responded: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_responded', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    details: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    entity_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_sid' }})
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    factor_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'factor_sid' }})
    factor_type: Optional[challenge_enum_factor_types_enum.ChallengeEnumFactorTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'factor_type' }})
    hidden_details: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hidden_details' }})
    identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    metadata: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    responded_reason: Optional[challenge_enum_challenge_reasons_enum.ChallengeEnumChallengeReasonsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responded_reason' }})
    service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    status: Optional[challenge_enum_challenge_statuses_enum.ChallengeEnumChallengeStatusesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
