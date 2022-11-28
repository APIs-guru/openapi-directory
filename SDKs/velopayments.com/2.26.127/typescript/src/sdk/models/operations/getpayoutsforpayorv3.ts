import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetPayoutsForPayorV3StatusEnum {
    Accepted = "ACCEPTED",
    Rejected = "REJECTED",
    Submitted = "SUBMITTED",
    Quoted = "QUOTED",
    Instructed = "INSTRUCTED",
    Completed = "COMPLETED",
    Incomplete = "INCOMPLETE",
    Confirmed = "CONFIRMED",
    Withdrawn = "WITHDRAWN"
}


export class GetPayoutsForPayorV3QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payoutMemo" })
  payoutMemo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetPayoutsForPayorV3StatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=submittedDateFrom" })
  submittedDateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=submittedDateTo" })
  submittedDateTo?: Date;
}


export class GetPayoutsForPayorV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPayoutsForPayorV3QueryParams;
}


export class GetPayoutsForPayorV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPayoutsResponseV3?: shared.GetPayoutsResponseV3;

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
