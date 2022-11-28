import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ShowServiceInstancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ShowServiceInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ShowServiceInstancePathParams;
}


export class ShowServiceInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorNotFound?: shared.ErrorNotFound;

  @SpeakeasyMetadata()
  serviceInstance?: shared.ServiceInstance;

  @SpeakeasyMetadata()
  statusCode: number;
}
