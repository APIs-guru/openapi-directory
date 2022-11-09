import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetIpIpv4TxtPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ipv4" })
  ipv4: string;
}


export class GetIpIpv4TxtRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIpIpv4TxtPathParams;
}


export class GetIpIpv4TxtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dateTimeTextResponse?: string;

  @Metadata()
  errorTextResponse?: string;

  @Metadata()
  statusCode: number;
}
