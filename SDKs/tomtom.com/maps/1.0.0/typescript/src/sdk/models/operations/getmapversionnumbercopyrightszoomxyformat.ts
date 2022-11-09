import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum {
    Json = "json"
,    Jsonp = "jsonp"
,    Xml = "xml"
}


export class GetMapVersionNumberCopyrightsZoomXYFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=X" })
  x: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Y" })
  y: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=zoom" })
  zoom: number;
}


export class GetMapVersionNumberCopyrightsZoomXYFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;
}


export class GetMapVersionNumberCopyrightsZoomXYFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMapVersionNumberCopyrightsZoomXYFormatPathParams;

  @Metadata()
  queryParams: GetMapVersionNumberCopyrightsZoomXYFormatQueryParams;
}


export class GetMapVersionNumberCopyrightsZoomXYFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
