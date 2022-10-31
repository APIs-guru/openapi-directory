package operations

type UserAPIPostSettingPathParams struct {
	ID          int32  `pathParam:"style=simple,explode=false,name=id"`
	SettingName string `pathParam:"style=simple,explode=false,name=settingName"`
}

type UserAPIPostSettingRequests struct {
	String  *string `request:"mediaType=application/json"`
	String1 *string `request:"mediaType=application/x-www-form-urlencoded"`
	String2 *string `request:"mediaType=application/xml"`
	String3 *string `request:"mediaType=text/json"`
	String4 *string `request:"mediaType=text/xml"`
}

type UserAPIPostSettingRequest struct {
	PathParams UserAPIPostSettingPathParams
	Request    UserAPIPostSettingRequests
}

type UserAPIPostSettingResponse struct {
	ContentType string
	StatusCode  int64
}
