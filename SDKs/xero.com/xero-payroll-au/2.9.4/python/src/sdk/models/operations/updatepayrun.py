from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdatePayRunPathParams:
    pay_run_id: str = field(metadata={'path_param': { 'field_name': 'PayRunID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePayRunHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePayRunSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdatePayRunRequest:
    headers: UpdatePayRunHeaders = field()
    path_params: UpdatePayRunPathParams = field()
    security: UpdatePayRunSecurity = field()
    request: Optional[List[shared.PayRunInput]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdatePayRunResponse:
    content_type: str = field()
    status_code: int = field()
    pay_runs: Optional[shared.PayRuns] = field(default=None)
    
