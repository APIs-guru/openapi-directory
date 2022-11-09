import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEREPLACEITEMS_SERVERS = [
	"https://numbers.twilio.com",
];



export class CreateReplaceItemsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=BundleSid" })
  bundleSid: string;
}


export class CreateReplaceItemsCreateReplaceItemsRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FromBundleSid;" })
  fromBundleSid: string;
}


export class CreateReplaceItemsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateReplaceItemsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateReplaceItemsPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateReplaceItemsCreateReplaceItemsRequest;

  @Metadata()
  security: CreateReplaceItemsSecurity;
}


export class CreateReplaceItemsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  numbersV2RegulatoryComplianceBundleReplaceItems?: shared.NumbersV2RegulatoryComplianceBundleReplaceItems;
}
