import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateReplaceItemsServerList = [
	"https://numbers.twilio.com",
] as const;


export class CreateReplaceItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BundleSid" })
  bundleSid: string;
}


export class CreateReplaceItemsCreateReplaceItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=FromBundleSid;" })
  fromBundleSid: string;
}


export class CreateReplaceItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateReplaceItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateReplaceItemsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateReplaceItemsCreateReplaceItemsRequest;

  @SpeakeasyMetadata()
  security: CreateReplaceItemsSecurity;
}


export class CreateReplaceItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  numbersV2RegulatoryComplianceBundleReplaceItems?: shared.NumbersV2RegulatoryComplianceBundleReplaceItems;
}
