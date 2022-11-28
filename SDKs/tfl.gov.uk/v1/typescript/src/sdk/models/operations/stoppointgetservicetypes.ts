import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopPointGetServiceTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lineIds" })
  lineIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modes" })
  modes?: string[];
}


export class StopPointGetServiceTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: StopPointGetServiceTypesQueryParams;
}


export class StopPointGetServiceTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesLineServiceType })
  tflApiPresentationEntitiesLineServiceTypes?: shared.TflApiPresentationEntitiesLineServiceType[];
}
