package operations

type UserUpdateUserQueryParams struct {
	AccountNumber        *string `queryParam:"style=form,explode=true,name=AccountNumber"`
	ExternalEntityNumber *string `queryParam:"style=form,explode=true,name=ExternalEntityNumber"`
	Guardian             *int32  `queryParam:"style=form,explode=true,name=Guardian"`
	GymNumber            *string `queryParam:"style=form,explode=true,name=GymNumber"`
	IntroduceBy          *int32  `queryParam:"style=form,explode=true,name=IntroduceBy"`
	Name                 *string `queryParam:"style=form,explode=true,name=Name"`
	Number               *string `queryParam:"style=form,explode=true,name=Number"`
	TypeID               *int32  `queryParam:"style=form,explode=true,name=TypeId"`
	UserID               *int32  `queryParam:"style=form,explode=true,name=UserId"`
}

type UserUpdateUserRequest struct {
	QueryParams UserUpdateUserQueryParams
}

type UserUpdateUserResponse struct {
	ContentType string
	StatusCode  int64
}
