import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMyOrdersSellingByUuidUuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class GetMyOrdersSellingByUuidUuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMyOrdersSellingByUuidUuidPathParams;
}


export class GetMyOrdersSellingByUuidUuidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
