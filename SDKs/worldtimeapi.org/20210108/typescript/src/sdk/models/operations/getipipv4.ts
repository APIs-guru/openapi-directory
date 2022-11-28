import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetIpIpv4PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ipv4" })
  ipv4: string;
}


export class GetIpIpv4Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIpIpv4PathParams;
}


export class GetIpIpv4Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dateTimeJsonResponse?: any;

  @SpeakeasyMetadata()
  errorJsonResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
