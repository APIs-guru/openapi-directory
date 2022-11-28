from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class UpdateWordListPathParams:
    permalink: str = field(metadata={'path_param': { 'field_name': 'permalink', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWordListHeaders:
    auth_token: str = field(metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWordListRequest:
    headers: UpdateWordListHeaders = field()
    path_params: UpdateWordListPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateWordListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
