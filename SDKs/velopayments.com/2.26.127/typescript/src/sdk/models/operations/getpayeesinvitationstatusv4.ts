import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayeesInvitationStatusV4PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payorId" })
  payorId: string;
}


export class GetPayeesInvitationStatusV4QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=invitationStatus" })
  invitationStatus?: shared.InvitationStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payeeId" })
  payeeId?: string;
}


export class GetPayeesInvitationStatusV4Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPayeesInvitationStatusV4PathParams;

  @Metadata()
  queryParams: GetPayeesInvitationStatusV4QueryParams;
}


export class GetPayeesInvitationStatusV4Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pagedPayeeInvitationStatusResponse2?: shared.PagedPayeeInvitationStatusResponse2;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
