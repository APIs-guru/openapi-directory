import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum {
    Json = "json"
,    Jsonp = "jsonp"
,    Xml = "xml"
}


export class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=maxLat" })
  maxLat: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=maxLon" })
  maxLon: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=minLat" })
  minLat: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=minLon" })
  minLon: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;
}


export class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams;

  @Metadata()
  queryParams: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryParams;
}


export class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
