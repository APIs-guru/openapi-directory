import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserUpdateUserQueryParams extends SpeakeasyBase {
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


export class UserUpdateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UserUpdateUserQueryParams;
}


export class UserUpdateUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
