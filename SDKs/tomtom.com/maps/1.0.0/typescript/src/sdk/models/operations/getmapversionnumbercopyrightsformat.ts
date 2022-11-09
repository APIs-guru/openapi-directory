import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetMapVersionNumberCopyrightsFormatFormatEnum {
    Json = "json"
,    Jsonp = "jsonp"
,    Xml = "xml"
}


export class GetMapVersionNumberCopyrightsFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetMapVersionNumberCopyrightsFormatFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetMapVersionNumberCopyrightsFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;
}


export class GetMapVersionNumberCopyrightsFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMapVersionNumberCopyrightsFormatPathParams;

  @Metadata()
  queryParams: GetMapVersionNumberCopyrightsFormatQueryParams;
}


export class GetMapVersionNumberCopyrightsFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
