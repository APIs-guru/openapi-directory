package operations

import (
	"openapi/pkg/models/shared"
)

type AccessTokenPutRequests struct {
	AccessTokenToPut  *shared.AccessTokenToPut `request:"mediaType=application/json"`
	AccessTokenToPut1 *shared.AccessTokenToPut `request:"mediaType=application/x-www-form-urlencoded"`
	AccessTokenToPut2 *shared.AccessTokenToPut `request:"mediaType=text/json"`
	ApplicationXML    []byte                   `request:"mediaType=application/xml"`
	TextXML           []byte                   `request:"mediaType=text/xml"`
}

type AccessTokenPutRequest struct {
	Request AccessTokenPutRequests
}

type AccessTokenPutResponse struct {
	AccessTokenPut200ApplicationJSONString *string
	AccessTokenPut200ApplicationXMLString  *string
	AccessTokenPut200TextJSONString        *string
	AccessTokenPut200TextXMLString         *string
	ContentType                            string
	StatusCode                             int64
}
