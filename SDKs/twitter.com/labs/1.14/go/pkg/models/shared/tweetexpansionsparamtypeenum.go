package shared

type TweetExpansionsParamTypeEnum string

const (
	TweetExpansionsParamTypeEnumAuthorID                   TweetExpansionsParamTypeEnum = "author_id"
	TweetExpansionsParamTypeEnumReferencedTweetsID         TweetExpansionsParamTypeEnum = "referenced_tweets.id"
	TweetExpansionsParamTypeEnumInReplyToUserID            TweetExpansionsParamTypeEnum = "in_reply_to_user_id"
	TweetExpansionsParamTypeEnumGeoPlaceID                 TweetExpansionsParamTypeEnum = "geo.place_id"
	TweetExpansionsParamTypeEnumAttachmentsMediaKeys       TweetExpansionsParamTypeEnum = "attachments.media_keys"
	TweetExpansionsParamTypeEnumAttachmentsPollIds         TweetExpansionsParamTypeEnum = "attachments.poll_ids"
	TweetExpansionsParamTypeEnumEntitiesMentionsUsername   TweetExpansionsParamTypeEnum = "entities.mentions.username"
	TweetExpansionsParamTypeEnumReferencedTweetsIDAuthorID TweetExpansionsParamTypeEnum = "referenced_tweets.id.author_id"
)
