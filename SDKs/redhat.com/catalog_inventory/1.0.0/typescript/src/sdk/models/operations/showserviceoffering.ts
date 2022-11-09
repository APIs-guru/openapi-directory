import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ShowServiceOfferingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ShowServiceOfferingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ShowServiceOfferingPathParams;
}


export class ShowServiceOfferingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorNotFound?: shared.ErrorNotFound;

  @Metadata()
  serviceOffering?: shared.ServiceOffering;

  @Metadata()
  statusCode: number;
}
