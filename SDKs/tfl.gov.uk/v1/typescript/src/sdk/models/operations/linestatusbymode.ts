import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LineStatusByModePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=modes" })
  modes: string[];
}


export class LineStatusByModeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=detail" })
  detail?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=severityLevel" })
  severityLevel?: string;
}


export class LineStatusByModeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LineStatusByModePathParams;

  @Metadata()
  queryParams: LineStatusByModeQueryParams;
}


export class LineStatusByModeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesLine })
  tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
