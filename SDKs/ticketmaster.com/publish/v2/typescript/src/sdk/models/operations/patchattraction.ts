import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchAttractionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchAttractionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PatchAttractionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchAttractionPathParams;

  @Metadata()
  headers: PatchAttractionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AugmentationData;
}


export class PatchAttractionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
