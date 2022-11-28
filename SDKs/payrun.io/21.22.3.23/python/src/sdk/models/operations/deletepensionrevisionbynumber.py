from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeletePensionRevisionByNumberPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pension_id: str = field(metadata={'path_param': { 'field_name': 'PensionId', 'style': 'simple', 'explode': False }})
    revision_number: str = field(metadata={'path_param': { 'field_name': 'RevisionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePensionRevisionByNumberHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePensionRevisionByNumberRequest:
    headers: DeletePensionRevisionByNumberHeaders = field()
    path_params: DeletePensionRevisionByNumberPathParams = field()
    

@dataclass
class DeletePensionRevisionByNumberResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
