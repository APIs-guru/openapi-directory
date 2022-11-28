import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListPayeesV4QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ofacStatus" })
  ofacStatus?: shared.OfacStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onboardedStatus" })
  onboardedStatus?: shared.OnboardedStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payeeCountry" })
  payeeCountry?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payeeType" })
  payeeType?: shared.PayeeTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=remoteId" })
  remoteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=watchlistStatus" })
  watchlistStatus?: shared.WatchlistStatusEnum;
}


export class ListPayeesV4Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPayeesV4QueryParams;
}


export class ListPayeesV4Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pagedPayeeResponse2?: shared.PagedPayeeResponse2;

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
