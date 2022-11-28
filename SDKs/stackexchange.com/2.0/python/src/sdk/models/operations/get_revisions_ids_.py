from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GetRevisionsIdsPathParams:
    ids: str = field(metadata={'path_param': { 'field_name': 'ids', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRevisionsIdsQueryParams:
    site: str = field(metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    fromdate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'fromdate', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    todate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRevisionsIdsRequest:
    path_params: GetRevisionsIdsPathParams = field()
    query_params: GetRevisionsIdsQueryParams = field()
    

@dataclass
class GetRevisionsIdsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
