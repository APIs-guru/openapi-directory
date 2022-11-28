import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ShowServiceOfferingNodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ShowServiceOfferingNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ShowServiceOfferingNodePathParams;
}


export class ShowServiceOfferingNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorNotFound?: shared.ErrorNotFound;

  @SpeakeasyMetadata()
  serviceOfferingNode?: shared.ServiceOfferingNode;

  @SpeakeasyMetadata()
  statusCode: number;
}
