import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetIpIpv4PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ipv4" })
  ipv4: string;
}


export class GetIpIpv4Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIpIpv4PathParams;
}


export class GetIpIpv4Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dateTimeJsonResponse?: any;

  @Metadata()
  errorJsonResponse?: any;

  @Metadata()
  statusCode: number;
}
