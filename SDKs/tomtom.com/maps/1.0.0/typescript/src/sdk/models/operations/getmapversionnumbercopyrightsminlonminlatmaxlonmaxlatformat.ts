import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp",
    Xml = "xml"
}


export class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=maxLat" })
  maxLat: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=maxLon" })
  maxLon: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=minLat" })
  minLat: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=minLon" })
  minLon: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;
}


export class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryParams;
}


export class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
