package shared

type UserFieldsParameterEnum string

const (
	UserFieldsParameterEnumID              UserFieldsParameterEnum = "id"
	UserFieldsParameterEnumCreatedAt       UserFieldsParameterEnum = "created_at"
	UserFieldsParameterEnumName            UserFieldsParameterEnum = "name"
	UserFieldsParameterEnumUsername        UserFieldsParameterEnum = "username"
	UserFieldsParameterEnumProtected       UserFieldsParameterEnum = "protected"
	UserFieldsParameterEnumVerified        UserFieldsParameterEnum = "verified"
	UserFieldsParameterEnumWithheld        UserFieldsParameterEnum = "withheld"
	UserFieldsParameterEnumProfileImageURL UserFieldsParameterEnum = "profile_image_url"
	UserFieldsParameterEnumLocation        UserFieldsParameterEnum = "location"
	UserFieldsParameterEnumURL             UserFieldsParameterEnum = "url"
	UserFieldsParameterEnumDescription     UserFieldsParameterEnum = "description"
	UserFieldsParameterEnumEntities        UserFieldsParameterEnum = "entities"
	UserFieldsParameterEnumPinnedTweetID   UserFieldsParameterEnum = "pinned_tweet_id"
	UserFieldsParameterEnumPublicMetrics   UserFieldsParameterEnum = "public_metrics"
)
