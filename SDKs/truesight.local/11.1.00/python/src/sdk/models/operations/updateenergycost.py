from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateEnergyCostPathParams:
    group_id: str = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEnergyCostRequest:
    path_params: UpdateEnergyCostPathParams = field()
    request: Optional[shared.GroupConfiguration] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateEnergyCostResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
