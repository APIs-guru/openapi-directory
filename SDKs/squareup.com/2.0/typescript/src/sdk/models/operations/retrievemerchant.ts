import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveMerchantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=merchant_id" })
  merchantId: string;
}


export class RetrieveMerchantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveMerchantRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveMerchantPathParams;

  @Metadata()
  security: RetrieveMerchantSecurity;
}


export class RetrieveMerchantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveMerchantResponse?: shared.RetrieveMerchantResponse;

  @Metadata()
  statusCode: number;
}
