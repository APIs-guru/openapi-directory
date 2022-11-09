import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NewsByDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;
}


export class NewsByDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NewsByDatePathParams;
}


export class NewsByDateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  news?: any[];

  @Metadata()
  statusCode: number;
}
