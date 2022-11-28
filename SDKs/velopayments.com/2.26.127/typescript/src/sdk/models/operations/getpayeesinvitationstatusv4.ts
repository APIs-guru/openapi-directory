import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayeesInvitationStatusV4PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payorId" })
  payorId: string;
}


export class GetPayeesInvitationStatusV4QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=invitationStatus" })
  invitationStatus?: shared.InvitationStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payeeId" })
  payeeId?: string;
}


export class GetPayeesInvitationStatusV4Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPayeesInvitationStatusV4PathParams;

  @SpeakeasyMetadata()
  queryParams: GetPayeesInvitationStatusV4QueryParams;
}


export class GetPayeesInvitationStatusV4Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pagedPayeeInvitationStatusResponse2?: shared.PagedPayeeInvitationStatusResponse2;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse400?: any;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;

  @SpeakeasyMetadata()
  inlineResponse404?: any;
}
