import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NewsByPlayerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;
}


export class NewsByPlayerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NewsByPlayerPathParams;
}


export class NewsByPlayerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  news?: any[];

  @Metadata()
  statusCode: number;
}
