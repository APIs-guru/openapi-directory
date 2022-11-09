import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMyOrdersBuyingByUuidUuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class GetMyOrdersBuyingByUuidUuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMyOrdersBuyingByUuidUuidPathParams;
}


export class GetMyOrdersBuyingByUuidUuidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
