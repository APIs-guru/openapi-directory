import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AreGamesInProgressFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class AreGamesInProgressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: AreGamesInProgressFormatEnum;
}


export class AreGamesInProgressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AreGamesInProgressPathParams;
}


export class AreGamesInProgressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  areGamesInProgress200ApplicationJsonBoolean?: boolean;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
