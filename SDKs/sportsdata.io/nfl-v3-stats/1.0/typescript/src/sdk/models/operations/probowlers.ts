import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProBowlersFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class ProBowlersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProBowlersFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class ProBowlersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProBowlersPathParams;
}


export class ProBowlersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerInfos?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
