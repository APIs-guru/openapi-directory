import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayeeByIdV3PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payeeId" })
  payeeId: string;
}


export class GetPayeeByIdV3QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sensitive" })
  sensitive?: boolean;
}


export class GetPayeeByIdV3Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPayeeByIdV3PathParams;

  @Metadata()
  queryParams: GetPayeeByIdV3QueryParams;
}


export class GetPayeeByIdV3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payeeDetailResponse?: shared.PayeeDetailResponse;

  @Metadata()
  statusCode: number;
}
