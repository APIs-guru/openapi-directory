from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class UpdateLegalEntityPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLegalEntityRequest:
    path_params: UpdateLegalEntityPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateLegalEntityResponse:
    content_type: str = field()
    status_code: int = field()
    error_models: Optional[List[Any]] = field(default=None)
    legal_entity: Optional[shared.LegalEntity] = field(default=None)
    
