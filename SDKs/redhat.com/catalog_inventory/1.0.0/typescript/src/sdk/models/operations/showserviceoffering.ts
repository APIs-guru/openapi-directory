import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ShowServiceOfferingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ShowServiceOfferingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ShowServiceOfferingPathParams;
}


export class ShowServiceOfferingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorNotFound?: shared.ErrorNotFound;

  @SpeakeasyMetadata()
  serviceOffering?: shared.ServiceOffering;

  @SpeakeasyMetadata()
  statusCode: number;
}
