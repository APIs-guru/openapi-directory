from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayCodeByEffectiveDatePathParams:
    effective_date: date = field(metadata={'path_param': { 'field_name': 'EffectiveDate', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_code_id: str = field(metadata={'path_param': { 'field_name': 'PayCodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayCodeByEffectiveDateHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayCodeByEffectiveDateRequest:
    headers: GetPayCodeByEffectiveDateHeaders = field()
    path_params: GetPayCodeByEffectiveDatePathParams = field()
    

@dataclass
class GetPayCodeByEffectiveDateResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    pay_code: Optional[shared.PayCode] = field(default=None)
    
