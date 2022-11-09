import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WeekCurrentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;
}


export class WeekCurrentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: WeekCurrentPathParams;
}


export class WeekCurrentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  weekCurrent200ApplicationJsonInteger?: number;
}
