import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AreGamesInProgressFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class AreGamesInProgressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: AreGamesInProgressFormatEnum;
}


export class AreGamesInProgressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AreGamesInProgressPathParams;
}


export class AreGamesInProgressResponse extends SpeakeasyBase {
  @Metadata()
  areGamesInProgress200ApplicationJsonBoolean?: boolean;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
