import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CurrentSeasontypeFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class CurrentSeasontypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: CurrentSeasontypeFormatEnum;
}


export class CurrentSeasontypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CurrentSeasontypePathParams;
}


export class CurrentSeasontypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  currentSeasontype200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
