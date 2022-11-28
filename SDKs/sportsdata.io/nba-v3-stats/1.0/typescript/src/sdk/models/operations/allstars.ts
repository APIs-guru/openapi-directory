import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AllStarsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class AllStarsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: AllStarsFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class AllStarsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AllStarsPathParams;
}


export class AllStarsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerInfos?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
