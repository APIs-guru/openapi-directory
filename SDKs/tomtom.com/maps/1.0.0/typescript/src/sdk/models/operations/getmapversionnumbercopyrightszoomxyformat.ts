import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp",
    Xml = "xml"
}


export class GetMapVersionNumberCopyrightsZoomXYFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=X" })
  x: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Y" })
  y: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zoom" })
  zoom: number;
}


export class GetMapVersionNumberCopyrightsZoomXYFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;
}


export class GetMapVersionNumberCopyrightsZoomXYFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMapVersionNumberCopyrightsZoomXYFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetMapVersionNumberCopyrightsZoomXYFormatQueryParams;
}


export class GetMapVersionNumberCopyrightsZoomXYFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
