import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetIpIpv4TxtPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ipv4" })
  ipv4: string;
}


export class GetIpIpv4TxtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIpIpv4TxtPathParams;
}


export class GetIpIpv4TxtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dateTimeTextResponse?: string;

  @SpeakeasyMetadata()
  errorTextResponse?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
