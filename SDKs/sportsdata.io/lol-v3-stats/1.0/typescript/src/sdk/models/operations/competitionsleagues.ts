import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CompetitionsLeaguesFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class CompetitionsLeaguesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: CompetitionsLeaguesFormatEnum;
}


export class CompetitionsLeaguesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompetitionsLeaguesPathParams;
}


export class CompetitionsLeaguesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  competitions?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
