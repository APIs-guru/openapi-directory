from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubContractorByEffectiveDatePathParams:
    effective_date: date = field(metadata={'path_param': { 'field_name': 'EffectiveDate', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    sub_contractor_id: str = field(metadata={'path_param': { 'field_name': 'SubContractorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubContractorByEffectiveDateHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubContractorByEffectiveDateRequest:
    headers: GetSubContractorByEffectiveDateHeaders = field()
    path_params: GetSubContractorByEffectiveDatePathParams = field()
    

@dataclass
class GetSubContractorByEffectiveDateResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    sub_contractor: Optional[shared.SubContractor] = field(default=None)
    
