import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchVenuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchVenueHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PatchVenueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchVenuePathParams;

  @SpeakeasyMetadata()
  headers: PatchVenueHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AugmentationData;
}


export class PatchVenueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
