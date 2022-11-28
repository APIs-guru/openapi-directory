import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayeesInvitationStatusV3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payorId" })
  payorId: string;
}


export class GetPayeesInvitationStatusV3QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=invitationStatus" })
  invitationStatus?: shared.InvitationStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payeeId" })
  payeeId?: string;
}


export class GetPayeesInvitationStatusV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPayeesInvitationStatusV3PathParams;

  @SpeakeasyMetadata()
  queryParams: GetPayeesInvitationStatusV3QueryParams;
}


export class GetPayeesInvitationStatusV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pagedPayeeInvitationStatusResponse?: shared.PagedPayeeInvitationStatusResponse;

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
