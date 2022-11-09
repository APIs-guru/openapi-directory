import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTimezoneAreaTxtPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=area" })
  area: string;
}


export class GetTimezoneAreaTxtRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTimezoneAreaTxtPathParams;
}


export class GetTimezoneAreaTxtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorTextResponse?: string;

  @Metadata()
  listTextResponse?: string;

  @Metadata()
  statusCode: number;
}
