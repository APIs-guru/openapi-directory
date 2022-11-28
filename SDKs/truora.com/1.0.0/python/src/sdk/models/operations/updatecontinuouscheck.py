from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateContinuousCheckPathParams:
    continuous_check_id: float = field(metadata={'path_param': { 'field_name': 'continuous_check_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateContinuousCheckSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateContinuousCheckRequest:
    path_params: UpdateContinuousCheckPathParams = field()
    request: shared.UpdateContinuousCheckInput = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateContinuousCheckSecurity = field()
    

@dataclass
class UpdateContinuousCheckResponse:
    content_type: str = field()
    status_code: int = field()
    continuous_check: Optional[shared.ContinuousCheck] = field(default=None)
    
