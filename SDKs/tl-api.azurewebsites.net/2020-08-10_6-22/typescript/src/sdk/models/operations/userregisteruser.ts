import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserRegisterUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AccountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExternalEntityNumber" })
  externalEntityNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Guardian" })
  guardian?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GymNumber" })
  gymNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IntroduceBy" })
  introduceBy?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Number" })
  number?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TypeId" })
  typeId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserId" })
  userId?: number;
}


export class UserRegisterUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UserRegisterUserQueryParams;
}


export class UserRegisterUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
