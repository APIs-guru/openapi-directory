from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class PostAPITextTransformQueryParams:
    case_type: Optional[shared.CaseTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'caseType', 'style': 'form', 'explode': True }})
    find: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'find', 'style': 'form', 'explode': True }})
    replace: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'replace', 'style': 'form', 'explode': True }})
    text_action_type: shared.TextActionTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'textActionType', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAPITextTransformHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key' }})
    

@dataclass
class PostAPITextTransformRequests:
    text_dto: Optional[shared.TextDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    text_dto1: Optional[shared.TextDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    text_dto2: Optional[shared.TextDto] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    text_dto3: Optional[shared.TextDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAPITextTransformRequest:
    query_params: PostAPITextTransformQueryParams = field(default=None)
    headers: PostAPITextTransformHeaders = field(default=None)
    request: PostAPITextTransformRequests = field(default=None)
    

@dataclass
class PostAPITextTransformResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
