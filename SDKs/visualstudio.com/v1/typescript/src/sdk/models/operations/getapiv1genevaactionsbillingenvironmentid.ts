import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1GenevaActionsBillingEnvironmentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetApiV1GenevaActionsBillingEnvironmentIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime?: string;
}


export class GetApiV1GenevaActionsBillingEnvironmentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1GenevaActionsBillingEnvironmentIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiV1GenevaActionsBillingEnvironmentIdQueryParams;
}


export class GetApiV1GenevaActionsBillingEnvironmentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  billSummary?: shared.BillSummary;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
