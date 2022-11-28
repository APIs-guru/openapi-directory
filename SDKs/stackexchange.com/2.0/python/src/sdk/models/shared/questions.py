from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional


@dataclass
class QuestionsBountyUserBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class QuestionsBountyUser:
    accept_rate: Optional[int] = field(default=None)
    badge_counts: Optional[QuestionsBountyUserBadgeCounts] = field(default=None)
    display_name: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    

@dataclass
class QuestionsClosedDetails:
    by_users: Optional[List[Any]] = field(default=None)
    description: Optional[str] = field(default=None)
    on_hold: Optional[bool] = field(default=None)
    original_questions: Optional[List[Any]] = field(default=None)
    reason: Optional[str] = field(default=None)
    

@dataclass
class QuestionsLastEditorBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class QuestionsLastEditor:
    accept_rate: Optional[int] = field(default=None)
    badge_counts: Optional[QuestionsLastEditorBadgeCounts] = field(default=None)
    display_name: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    

@dataclass
class QuestionsMigratedFromOtherSiteStyling:
    link_color: Optional[str] = field(default=None)
    tag_background_color: Optional[str] = field(default=None)
    tag_foreground_color: Optional[str] = field(default=None)
    

@dataclass
class QuestionsMigratedFromOtherSite:
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
    styling: Optional[QuestionsMigratedFromOtherSiteStyling] = field(default=None)
    twitter_account: Optional[str] = field(default=None)
    

@dataclass
class QuestionsMigratedFrom:
    on_date: Optional[int] = field(default=None)
    other_site: Optional[QuestionsMigratedFromOtherSite] = field(default=None)
    question_id: Optional[int] = field(default=None)
    

@dataclass
class QuestionsMigratedToOtherSiteStyling:
    link_color: Optional[str] = field(default=None)
    tag_background_color: Optional[str] = field(default=None)
    tag_foreground_color: Optional[str] = field(default=None)
    

@dataclass
class QuestionsMigratedToOtherSite:
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
    styling: Optional[QuestionsMigratedToOtherSiteStyling] = field(default=None)
    twitter_account: Optional[str] = field(default=None)
    

@dataclass
class QuestionsMigratedTo:
    on_date: Optional[int] = field(default=None)
    other_site: Optional[QuestionsMigratedToOtherSite] = field(default=None)
    question_id: Optional[int] = field(default=None)
    

@dataclass
class QuestionsNotice:
    body: Optional[str] = field(default=None)
    creation_date: Optional[int] = field(default=None)
    owner_user_id: Optional[int] = field(default=None)
    

@dataclass
class QuestionsOwnerBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class QuestionsOwner:
    accept_rate: Optional[int] = field(default=None)
    badge_counts: Optional[QuestionsOwnerBadgeCounts] = field(default=None)
    display_name: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    

@dataclass
class Questions:
    accepted_answer_id: Optional[int] = field(default=None)
    answer_count: Optional[int] = field(default=None)
    answers: Optional[List[Any]] = field(default=None)
    body: Optional[str] = field(default=None)
    body_markdown: Optional[str] = field(default=None)
    bounty_amount: Optional[int] = field(default=None)
    bounty_closes_date: Optional[int] = field(default=None)
    bounty_user: Optional[QuestionsBountyUser] = field(default=None)
    can_close: Optional[bool] = field(default=None)
    can_flag: Optional[bool] = field(default=None)
    close_vote_count: Optional[int] = field(default=None)
    closed_date: Optional[int] = field(default=None)
    closed_details: Optional[QuestionsClosedDetails] = field(default=None)
    closed_reason: Optional[str] = field(default=None)
    comment_count: Optional[int] = field(default=None)
    comments: Optional[List[Any]] = field(default=None)
    community_owned_date: Optional[int] = field(default=None)
    creation_date: Optional[int] = field(default=None)
    delete_vote_count: Optional[int] = field(default=None)
    down_vote_count: Optional[int] = field(default=None)
    downvoted: Optional[bool] = field(default=None)
    favorite_count: Optional[int] = field(default=None)
    favorited: Optional[bool] = field(default=None)
    is_answered: Optional[bool] = field(default=None)
    last_activity_date: Optional[int] = field(default=None)
    last_edit_date: Optional[int] = field(default=None)
    last_editor: Optional[QuestionsLastEditor] = field(default=None)
    link: Optional[str] = field(default=None)
    locked_date: Optional[int] = field(default=None)
    migrated_from: Optional[QuestionsMigratedFrom] = field(default=None)
    migrated_to: Optional[QuestionsMigratedTo] = field(default=None)
    notice: Optional[QuestionsNotice] = field(default=None)
    owner: Optional[QuestionsOwner] = field(default=None)
    protected_date: Optional[int] = field(default=None)
    question_id: Optional[int] = field(default=None)
    reopen_vote_count: Optional[int] = field(default=None)
    score: Optional[int] = field(default=None)
    share_link: Optional[str] = field(default=None)
    tags: Optional[List[Any]] = field(default=None)
    title: Optional[str] = field(default=None)
    up_vote_count: Optional[int] = field(default=None)
    upvoted: Optional[bool] = field(default=None)
    view_count: Optional[int] = field(default=None)
    
