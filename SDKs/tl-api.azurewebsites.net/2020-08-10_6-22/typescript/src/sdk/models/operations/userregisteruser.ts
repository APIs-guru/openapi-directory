import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserRegisterUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AccountNumber" })
  accountNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ExternalEntityNumber" })
  externalEntityNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Guardian" })
  guardian?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GymNumber" })
  gymNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IntroduceBy" })
  introduceBy?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Number" })
  number?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TypeId" })
  typeId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserId" })
  userId?: number;
}


export class UserRegisterUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UserRegisterUserQueryParams;
}


export class UserRegisterUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
