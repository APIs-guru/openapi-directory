import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListPayeesV4QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=displayName" })
  displayName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ofacStatus" })
  ofacStatus?: shared.OfacStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=onboardedStatus" })
  onboardedStatus?: shared.OnboardedStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payeeCountry" })
  payeeCountry?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payeeType" })
  payeeType?: shared.PayeeTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=remoteId" })
  remoteId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=watchlistStatus" })
  watchlistStatus?: shared.WatchlistStatusEnum;
}


export class ListPayeesV4Request extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPayeesV4QueryParams;
}


export class ListPayeesV4Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pagedPayeeResponse2?: shared.PagedPayeeResponse2;

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
