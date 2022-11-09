import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SeasonCurrentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;
}


export class SeasonCurrentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SeasonCurrentPathParams;
}


export class SeasonCurrentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  seasonCurrent200ApplicationJsonInteger?: number;

  @Metadata()
  statusCode: number;
}
