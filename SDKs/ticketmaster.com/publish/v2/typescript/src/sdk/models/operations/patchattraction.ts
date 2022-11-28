import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchAttractionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchAttractionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PatchAttractionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchAttractionPathParams;

  @SpeakeasyMetadata()
  headers: PatchAttractionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AugmentationData;
}


export class PatchAttractionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
