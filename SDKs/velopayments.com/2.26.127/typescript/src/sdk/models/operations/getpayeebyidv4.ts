import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayeeByIdV4PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payeeId" })
  payeeId: string;
}


export class GetPayeeByIdV4QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sensitive" })
  sensitive?: boolean;
}


export class GetPayeeByIdV4Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPayeeByIdV4PathParams;

  @Metadata()
  queryParams: GetPayeeByIdV4QueryParams;
}


export class GetPayeeByIdV4Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payeeDetailResponse2?: shared.PayeeDetailResponse2;

  @Metadata()
  statusCode: number;
}
