import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListPayeeChangesV4QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedSince" })
  updatedSince: Date;
}


export class ListPayeeChangesV4Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPayeeChangesV4QueryParams;
}


export class ListPayeeChangesV4Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payeeDeltaResponse2?: shared.PayeeDeltaResponse2;

  @SpeakeasyMetadata()
  statusCode: number;
}
