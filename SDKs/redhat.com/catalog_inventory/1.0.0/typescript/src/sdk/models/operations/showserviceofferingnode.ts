import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ShowServiceOfferingNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ShowServiceOfferingNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ShowServiceOfferingNodePathParams;
}


export class ShowServiceOfferingNodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorNotFound?: shared.ErrorNotFound;

  @Metadata()
  serviceOfferingNode?: shared.ServiceOfferingNode;

  @Metadata()
  statusCode: number;
}
