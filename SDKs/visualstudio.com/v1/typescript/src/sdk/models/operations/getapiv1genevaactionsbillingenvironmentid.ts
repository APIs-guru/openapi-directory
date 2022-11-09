import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1GenevaActionsBillingEnvironmentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetApiV1GenevaActionsBillingEnvironmentIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime?: string;
}


export class GetApiV1GenevaActionsBillingEnvironmentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV1GenevaActionsBillingEnvironmentIdPathParams;

  @Metadata()
  queryParams: GetApiV1GenevaActionsBillingEnvironmentIdQueryParams;
}


export class GetApiV1GenevaActionsBillingEnvironmentIdResponse extends SpeakeasyBase {
  @Metadata()
  billSummary?: shared.BillSummary;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
