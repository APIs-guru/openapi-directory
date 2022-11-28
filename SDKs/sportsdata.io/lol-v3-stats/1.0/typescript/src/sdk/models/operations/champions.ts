import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ChampionsFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class ChampionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ChampionsFormatEnum;
}


export class ChampionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChampionsPathParams;
}


export class ChampionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  champions?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
