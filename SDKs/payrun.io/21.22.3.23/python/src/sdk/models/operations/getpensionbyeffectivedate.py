from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetPensionByEffectiveDatePathParams:
    effective_date: date = field(metadata={'path_param': { 'field_name': 'EffectiveDate', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pension_id: str = field(metadata={'path_param': { 'field_name': 'PensionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPensionByEffectiveDateHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPensionByEffectiveDateRequest:
    headers: GetPensionByEffectiveDateHeaders = field()
    path_params: GetPensionByEffectiveDatePathParams = field()
    

@dataclass
class GetPensionByEffectiveDateResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    pension: Optional[shared.Pension] = field(default=None)
    
