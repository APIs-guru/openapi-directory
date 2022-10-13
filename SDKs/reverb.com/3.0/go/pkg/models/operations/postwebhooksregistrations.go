package operations

type PostWebhooksRegistrationsRequestBodyTopicEnum string

const (
	PostWebhooksRegistrationsRequestBodyTopicEnumListingsUpdate      PostWebhooksRegistrationsRequestBodyTopicEnum = "listings/update"
	PostWebhooksRegistrationsRequestBodyTopicEnumListingsPublish     PostWebhooksRegistrationsRequestBodyTopicEnum = "listings/publish"
	PostWebhooksRegistrationsRequestBodyTopicEnumListingsBumpsRanOut PostWebhooksRegistrationsRequestBodyTopicEnum = "listings/bumps-ran-out"
	PostWebhooksRegistrationsRequestBodyTopicEnumOrdersCreate        PostWebhooksRegistrationsRequestBodyTopicEnum = "orders/create"
	PostWebhooksRegistrationsRequestBodyTopicEnumOrdersUpdate        PostWebhooksRegistrationsRequestBodyTopicEnum = "orders/update"
	PostWebhooksRegistrationsRequestBodyTopicEnumPaymentsCreate      PostWebhooksRegistrationsRequestBodyTopicEnum = "payments/create"
	PostWebhooksRegistrationsRequestBodyTopicEnumPaymentsUpdate      PostWebhooksRegistrationsRequestBodyTopicEnum = "payments/update"
	PostWebhooksRegistrationsRequestBodyTopicEnumAppUninstalled      PostWebhooksRegistrationsRequestBodyTopicEnum = "app/uninstalled"
)

type PostWebhooksRegistrationsRequestBody struct {
	Topic PostWebhooksRegistrationsRequestBodyTopicEnum `json:"topic"`
	URL   string                                        `json:"url"`
}

type PostWebhooksRegistrationsRequest struct {
	Request *PostWebhooksRegistrationsRequestBody `request:"mediaType=application/json"`
}

type PostWebhooksRegistrationsResponse struct {
	ContentType string
	StatusCode  int64
}
