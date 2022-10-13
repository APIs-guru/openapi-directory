from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CertificateDeletePathParams:
    thumbprint: str = field(default=None, metadata={'path_param': { 'field_name': 'thumbprint', 'style': 'simple', 'explode': False }})
    thumbprint_algorithm: str = field(default=None, metadata={'path_param': { 'field_name': 'thumbprintAlgorithm', 'style': 'simple', 'explode': False }})
    

@dataclass
class CertificateDeleteQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class CertificateDeleteHeaders:
    client_request_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'client-request-id' }})
    ocp_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'ocp-date' }})
    return_client_request_id: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'return-client-request-id' }})
    

@dataclass
class CertificateDeleteRequest:
    path_params: CertificateDeletePathParams = field(default=None)
    query_params: CertificateDeleteQueryParams = field(default=None)
    headers: CertificateDeleteHeaders = field(default=None)
    

@dataclass
class CertificateDeleteResponse:
    batch_error: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
