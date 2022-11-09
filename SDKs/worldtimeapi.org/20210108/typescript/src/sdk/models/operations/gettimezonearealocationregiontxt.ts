import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTimezoneAreaLocationRegionTxtPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=area" })
  area: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=region" })
  region: string;
}


export class GetTimezoneAreaLocationRegionTxtRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTimezoneAreaLocationRegionTxtPathParams;
}


export class GetTimezoneAreaLocationRegionTxtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dateTimeTextResponse?: string;

  @Metadata()
  errorTextResponse?: string;

  @Metadata()
  statusCode: number;
}
