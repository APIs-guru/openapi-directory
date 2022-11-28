from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class TagAPIGetByNamePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class TagAPIGetByNameFieldsEnum(str, Enum):
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

class TagAPIGetByNameLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclass
class TagAPIGetByNameQueryParams:
    fields: Optional[TagAPIGetByNameFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[TagAPIGetByNameLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class TagAPIGetByNameRequest:
    path_params: TagAPIGetByNamePathParams = field()
    query_params: TagAPIGetByNameQueryParams = field()
    

@dataclass
class TagAPIGetByNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tag_for_api_contract: Optional[shared.TagForAPIContract] = field(default=None)
    
