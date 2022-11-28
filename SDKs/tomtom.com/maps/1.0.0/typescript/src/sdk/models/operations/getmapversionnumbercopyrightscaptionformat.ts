import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetMapVersionNumberCopyrightsCaptionFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp",
    Xml = "xml"
}


export class GetMapVersionNumberCopyrightsCaptionFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetMapVersionNumberCopyrightsCaptionFormatFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetMapVersionNumberCopyrightsCaptionFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;
}


export class GetMapVersionNumberCopyrightsCaptionFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMapVersionNumberCopyrightsCaptionFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetMapVersionNumberCopyrightsCaptionFormatQueryParams;
}


export class GetMapVersionNumberCopyrightsCaptionFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
