package shared

type TweetExpansionsParameterEnum string

const (
	TweetExpansionsParameterEnumAuthorID                   TweetExpansionsParameterEnum = "author_id"
	TweetExpansionsParameterEnumReferencedTweetsID         TweetExpansionsParameterEnum = "referenced_tweets.id"
	TweetExpansionsParameterEnumInReplyToUserID            TweetExpansionsParameterEnum = "in_reply_to_user_id"
	TweetExpansionsParameterEnumGeoPlaceID                 TweetExpansionsParameterEnum = "geo.place_id"
	TweetExpansionsParameterEnumAttachmentsMediaKeys       TweetExpansionsParameterEnum = "attachments.media_keys"
	TweetExpansionsParameterEnumAttachmentsPollIds         TweetExpansionsParameterEnum = "attachments.poll_ids"
	TweetExpansionsParameterEnumEntitiesMentionsUsername   TweetExpansionsParameterEnum = "entities.mentions.username"
	TweetExpansionsParameterEnumReferencedTweetsIDAuthorID TweetExpansionsParameterEnum = "referenced_tweets.id.author_id"
)
