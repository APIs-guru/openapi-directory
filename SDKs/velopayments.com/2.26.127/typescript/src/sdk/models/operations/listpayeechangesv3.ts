import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListPayeeChangesV3QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedSince" })
  updatedSince: Date;
}


export class ListPayeeChangesV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPayeeChangesV3QueryParams;
}


export class ListPayeeChangesV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payeeDeltaResponse?: shared.PayeeDeltaResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
