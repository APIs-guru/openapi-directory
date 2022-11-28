from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateFolderPathParams:
    folder_id: str = field(metadata={'path_param': { 'field_name': 'FolderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFolderHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFolderSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateFolderRequest:
    headers: UpdateFolderHeaders = field()
    path_params: UpdateFolderPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateFolderSecurity = field()
    

@dataclass
class UpdateFolderResponse:
    content_type: str = field()
    status_code: int = field()
    folder: Optional[Any] = field(default=None)
    
