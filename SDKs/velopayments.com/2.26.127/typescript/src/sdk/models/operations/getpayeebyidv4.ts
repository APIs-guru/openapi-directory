import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayeeByIdV4PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payeeId" })
  payeeId: string;
}


export class GetPayeeByIdV4QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sensitive" })
  sensitive?: boolean;
}


export class GetPayeeByIdV4Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPayeeByIdV4PathParams;

  @SpeakeasyMetadata()
  queryParams: GetPayeeByIdV4QueryParams;
}


export class GetPayeeByIdV4Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payeeDetailResponse2?: shared.PayeeDetailResponse2;

  @SpeakeasyMetadata()
  statusCode: number;
}
