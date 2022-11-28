from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class UpdateAdministrationPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    legal_entity_id: int = field(metadata={'path_param': { 'field_name': 'legal_entity_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAdministrationRequest:
    path_params: UpdateAdministrationPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAdministrationResponse:
    content_type: str = field()
    status_code: int = field()
    administration: Optional[Any] = field(default=None)
    
