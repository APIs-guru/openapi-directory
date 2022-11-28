import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayeeByIdV3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payeeId" })
  payeeId: string;
}


export class GetPayeeByIdV3QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sensitive" })
  sensitive?: boolean;
}


export class GetPayeeByIdV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPayeeByIdV3PathParams;

  @SpeakeasyMetadata()
  queryParams: GetPayeeByIdV3QueryParams;
}


export class GetPayeeByIdV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payeeDetailResponse?: shared.PayeeDetailResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
