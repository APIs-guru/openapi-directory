import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ByeWeeksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class ByeWeeksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ByeWeeksPathParams;
}


export class ByeWeeksResponse extends SpeakeasyBase {
  @Metadata()
  byes?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
