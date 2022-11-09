import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetPayoutsForPayorV3StatusEnum {
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


export class GetPayoutsForPayorV3QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payoutMemo" })
  payoutMemo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetPayoutsForPayorV3StatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=submittedDateFrom" })
  submittedDateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=submittedDateTo" })
  submittedDateTo?: Date;
}


export class GetPayoutsForPayorV3Request extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPayoutsForPayorV3QueryParams;
}


export class GetPayoutsForPayorV3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPayoutsResponseV3?: shared.GetPayoutsResponseV3;

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
