from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional


@dataclass
class InboxItemsSiteStyling:
    link_color: Optional[str] = field(default=None)
    tag_background_color: Optional[str] = field(default=None)
    tag_foreground_color: Optional[str] = field(default=None)
    

@dataclass
class InboxItemsSite:
    aliases: Optional[List[Any]] = field(default=None)
    api_site_parameter: Optional[str] = field(default=None)
    audience: Optional[str] = field(default=None)
    closed_beta_date: Optional[int] = field(default=None)
    favicon_url: Optional[str] = field(default=None)
    high_resolution_icon_url: Optional[str] = field(default=None)
    icon_url: Optional[str] = field(default=None)
    launch_date: Optional[int] = field(default=None)
    logo_url: Optional[str] = field(default=None)
    markdown_extensions: Optional[List[Any]] = field(default=None)
    name: Optional[str] = field(default=None)
    open_beta_date: Optional[int] = field(default=None)
    related_sites: Optional[List[Any]] = field(default=None)
    site_state: Optional[str] = field(default=None)
    site_type: Optional[str] = field(default=None)
    site_url: Optional[str] = field(default=None)
    styling: Optional[InboxItemsSiteStyling] = field(default=None)
    twitter_account: Optional[str] = field(default=None)
    

@dataclass
class InboxItems:
    answer_id: Optional[int] = field(default=None)
    body: Optional[str] = field(default=None)
    comment_id: Optional[int] = field(default=None)
    creation_date: Optional[int] = field(default=None)
    is_unread: Optional[bool] = field(default=None)
    item_type: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    question_id: Optional[int] = field(default=None)
    site: Optional[InboxItemsSite] = field(default=None)
    title: Optional[str] = field(default=None)
    
