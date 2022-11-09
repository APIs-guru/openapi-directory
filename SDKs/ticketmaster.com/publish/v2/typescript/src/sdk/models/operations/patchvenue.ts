import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchVenuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchVenueHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PatchVenueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchVenuePathParams;

  @Metadata()
  headers: PatchVenueHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AugmentationData;
}


export class PatchVenueResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
