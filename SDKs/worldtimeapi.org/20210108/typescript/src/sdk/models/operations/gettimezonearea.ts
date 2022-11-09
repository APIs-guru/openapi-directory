import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTimezoneAreaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=area" })
  area: string;
}


export class GetTimezoneAreaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTimezoneAreaPathParams;
}


export class GetTimezoneAreaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorJsonResponse?: any;

  @Metadata()
  listJsonResponse?: string[];

  @Metadata()
  statusCode: number;
}
