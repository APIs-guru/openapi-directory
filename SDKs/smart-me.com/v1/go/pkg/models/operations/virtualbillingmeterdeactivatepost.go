package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualBillingMeterDeactivatePostRequests struct {
	ApplicationXML      []byte                     `request:"mediaType=application/xml"`
	TextXML             []byte                     `request:"mediaType=text/xml"`
	VMeterToDeactivate  *shared.VMeterToDeactivate `request:"mediaType=application/json"`
	VMeterToDeactivate1 *shared.VMeterToDeactivate `request:"mediaType=application/x-www-form-urlencoded"`
	VMeterToDeactivate2 *shared.VMeterToDeactivate `request:"mediaType=text/json"`
}

type VirtualBillingMeterDeactivatePostRequest struct {
	Request VirtualBillingMeterDeactivatePostRequests
}

type VirtualBillingMeterDeactivatePostResponse struct {
	Body        []byte
	ContentType string
	Object      map[string]interface{}
	StatusCode  int64
}
