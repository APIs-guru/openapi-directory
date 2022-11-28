import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LineCombinationsBySeasonFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class LineCombinationsBySeasonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LineCombinationsBySeasonFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class LineCombinationsBySeasonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LineCombinationsBySeasonPathParams;
}


export class LineCombinationsBySeasonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamLines?: any[];
}
