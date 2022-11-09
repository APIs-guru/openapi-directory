import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetMapVersionNumberCopyrightsCaptionFormatFormatEnum {
    Json = "json"
,    Jsonp = "jsonp"
,    Xml = "xml"
}


export class GetMapVersionNumberCopyrightsCaptionFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetMapVersionNumberCopyrightsCaptionFormatFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetMapVersionNumberCopyrightsCaptionFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;
}


export class GetMapVersionNumberCopyrightsCaptionFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMapVersionNumberCopyrightsCaptionFormatPathParams;

  @Metadata()
  queryParams: GetMapVersionNumberCopyrightsCaptionFormatQueryParams;
}


export class GetMapVersionNumberCopyrightsCaptionFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
