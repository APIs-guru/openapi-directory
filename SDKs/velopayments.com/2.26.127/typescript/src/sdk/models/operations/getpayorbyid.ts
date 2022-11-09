import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayorByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payorId" })
  payorId: string;
}


export class GetPayorByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPayorByIdPathParams;
}


export class GetPayorByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  payorV1?: shared.PayorV1;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse403?: any;
}
