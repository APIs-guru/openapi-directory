import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOneServicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class GetOneServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOneServicePathParams;
}


export class GetOneServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
