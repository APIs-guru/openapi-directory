import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTimezoneAreaLocationTxtPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=area" })
  area: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;
}


export class GetTimezoneAreaLocationTxtRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTimezoneAreaLocationTxtPathParams;
}


export class GetTimezoneAreaLocationTxtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dateTimeTextResponse?: string;

  @Metadata()
  errorTextResponse?: string;

  @Metadata()
  statusCode: number;
}
