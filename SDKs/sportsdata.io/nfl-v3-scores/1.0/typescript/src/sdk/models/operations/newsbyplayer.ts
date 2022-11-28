import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NewsByPlayerFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class NewsByPlayerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: NewsByPlayerFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;
}


export class NewsByPlayerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NewsByPlayerPathParams;
}


export class NewsByPlayerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  news?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
