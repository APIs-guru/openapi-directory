from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class TagAPIGetChildTagsPathParams:
    tag_id: int = field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    
class TagAPIGetChildTagsFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    ALIASED_TO = "AliasedTo"
    DESCRIPTION = "Description"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    PARENT = "Parent"
    RELATED_TAGS = "RelatedTags"
    TRANSLATED_DESCRIPTION = "TranslatedDescription"
    WEB_LINKS = "WebLinks"

class TagAPIGetChildTagsLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclass
class TagAPIGetChildTagsQueryParams:
    fields: Optional[TagAPIGetChildTagsFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[TagAPIGetChildTagsLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class TagAPIGetChildTagsRequest:
    path_params: TagAPIGetChildTagsPathParams = field()
    query_params: TagAPIGetChildTagsQueryParams = field()
    

@dataclass
class TagAPIGetChildTagsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tag_for_api_contracts: Optional[List[shared.TagForAPIContract]] = field(default=None)
    
