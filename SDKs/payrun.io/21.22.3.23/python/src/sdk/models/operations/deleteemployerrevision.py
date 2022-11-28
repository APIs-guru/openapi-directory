from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteEmployerRevisionPathParams:
    effective_date: date = field(metadata={'path_param': { 'field_name': 'EffectiveDate', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEmployerRevisionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEmployerRevisionRequest:
    headers: DeleteEmployerRevisionHeaders = field()
    path_params: DeleteEmployerRevisionPathParams = field()
    

@dataclass
class DeleteEmployerRevisionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
