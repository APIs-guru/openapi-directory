from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateFilePathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFileHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFileSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateFileRequest:
    headers: UpdateFileHeaders = field()
    path_params: UpdateFilePathParams = field()
    security: UpdateFileSecurity = field()
    request: Optional[shared.FileObject] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateFileResponse:
    content_type: str = field()
    status_code: int = field()
    file_object: Optional[shared.FileObject] = field(default=None)
    
