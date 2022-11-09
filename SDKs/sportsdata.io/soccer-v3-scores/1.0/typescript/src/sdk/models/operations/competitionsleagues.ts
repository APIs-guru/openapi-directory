import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CompetitionsLeaguesFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class CompetitionsLeaguesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: CompetitionsLeaguesFormatEnum;
}


export class CompetitionsLeaguesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompetitionsLeaguesPathParams;
}


export class CompetitionsLeaguesResponse extends SpeakeasyBase {
  @Metadata()
  competitions?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
