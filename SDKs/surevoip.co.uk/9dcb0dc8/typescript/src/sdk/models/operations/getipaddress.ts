import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetIpAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
