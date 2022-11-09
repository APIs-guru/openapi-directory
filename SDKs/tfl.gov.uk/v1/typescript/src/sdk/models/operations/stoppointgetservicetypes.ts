import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StopPointGetServiceTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lineIds" })
  lineIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=modes" })
  modes?: string[];
}


export class StopPointGetServiceTypesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: StopPointGetServiceTypesQueryParams;
}


export class StopPointGetServiceTypesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesLineServiceType })
  tflApiPresentationEntitiesLineServiceTypes?: shared.TflApiPresentationEntitiesLineServiceType[];
}
