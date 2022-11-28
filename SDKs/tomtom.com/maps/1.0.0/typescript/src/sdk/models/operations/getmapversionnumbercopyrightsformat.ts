import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetMapVersionNumberCopyrightsFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp",
    Xml = "xml"
}


export class GetMapVersionNumberCopyrightsFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetMapVersionNumberCopyrightsFormatFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetMapVersionNumberCopyrightsFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;
}


export class GetMapVersionNumberCopyrightsFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMapVersionNumberCopyrightsFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetMapVersionNumberCopyrightsFormatQueryParams;
}


export class GetMapVersionNumberCopyrightsFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
