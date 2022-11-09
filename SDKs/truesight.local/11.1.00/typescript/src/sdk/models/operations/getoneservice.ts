import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOneServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class GetOneServiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOneServicePathParams;
}


export class GetOneServiceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
