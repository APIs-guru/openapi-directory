import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DfsSlatesByDateFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class DfsSlatesByDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: DfsSlatesByDateFormatEnum;
}


export class DfsSlatesByDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DfsSlatesByDatePathParams;
}


export class DfsSlatesByDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dfsSlates?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
