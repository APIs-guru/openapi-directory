import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetPayoutsForPayorV4StatusEnum {
    Accepted = "ACCEPTED"
,    Rejected = "REJECTED"
,    Submitted = "SUBMITTED"
,    Quoted = "QUOTED"
,    Instructed = "INSTRUCTED"
,    Completed = "COMPLETED"
,    Incomplete = "INCOMPLETE"
,    Confirmed = "CONFIRMED"
,    Withdrawn = "WITHDRAWN"
}


export class GetPayoutsForPayorV4QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fromPayorName" })
  fromPayorName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payoutMemo" })
  payoutMemo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetPayoutsForPayorV4StatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=submittedDateFrom" })
  submittedDateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=submittedDateTo" })
  submittedDateTo?: Date;
}


export class GetPayoutsForPayorV4Request extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPayoutsForPayorV4QueryParams;
}


export class GetPayoutsForPayorV4Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPayoutsResponse?: shared.GetPayoutsResponse;

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
