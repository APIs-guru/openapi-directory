import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BikePointGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class BikePointGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BikePointGetPathParams;
}


export class BikePointGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tflApiPresentationEntitiesPlace?: shared.TflApiPresentationEntitiesPlace;
}
