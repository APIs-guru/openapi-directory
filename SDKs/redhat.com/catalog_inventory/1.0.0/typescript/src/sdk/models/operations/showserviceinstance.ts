import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ShowServiceInstancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ShowServiceInstanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ShowServiceInstancePathParams;
}


export class ShowServiceInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorNotFound?: shared.ErrorNotFound;

  @Metadata()
  serviceInstance?: shared.ServiceInstance;

  @Metadata()
  statusCode: number;
}
