from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PlanResourceHeaders:
    client_tenant_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'clientTenantId' }})
    home_tenant_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'homeTenantId' }})
    identity_principal_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'identityPrincipalId' }})
    identity_url: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'identityUrl' }})
    
