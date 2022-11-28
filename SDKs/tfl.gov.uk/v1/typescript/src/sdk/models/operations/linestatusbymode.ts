import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LineStatusByModePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modes" })
  modes: string[];
}


export class LineStatusByModeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=detail" })
  detail?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=severityLevel" })
  severityLevel?: string;
}


export class LineStatusByModeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LineStatusByModePathParams;

  @SpeakeasyMetadata()
  queryParams: LineStatusByModeQueryParams;
}


export class LineStatusByModeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesLine })
  tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
