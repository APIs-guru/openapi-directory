from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayCodesByEffectiveDatePathParams:
    effective_date: datetime = field(default=None, metadata={'path_param': { 'field_name': 'EffectiveDate', 'style': 'simple', 'explode': False }})
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayCodesByEffectiveDateHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetPayCodesByEffectiveDateRequest:
    path_params: GetPayCodesByEffectiveDatePathParams = field(default=None)
    headers: GetPayCodesByEffectiveDateHeaders = field(default=None)
    

@dataclass
class GetPayCodesByEffectiveDateResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    status_code: int = field(default=None)
    
