from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional


@dataclass
class CertificateDeletePathParams:
    thumbprint: str = field(metadata={'path_param': { 'field_name': 'thumbprint', 'style': 'simple', 'explode': False }})
    thumbprint_algorithm: str = field(metadata={'path_param': { 'field_name': 'thumbprintAlgorithm', 'style': 'simple', 'explode': False }})
    

@dataclass
class CertificateDeleteQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class CertificateDeleteHeaders:
    client_request_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'client-request-id', 'style': 'simple', 'explode': False }})
    ocp_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'ocp-date', 'style': 'simple', 'explode': False }})
    return_client_request_id: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'return-client-request-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CertificateDeleteRequest:
    headers: CertificateDeleteHeaders = field()
    path_params: CertificateDeletePathParams = field()
    query_params: CertificateDeleteQueryParams = field()
    

@dataclass
class CertificateDeleteResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    batch_error: Optional[Any] = field(default=None)
    
