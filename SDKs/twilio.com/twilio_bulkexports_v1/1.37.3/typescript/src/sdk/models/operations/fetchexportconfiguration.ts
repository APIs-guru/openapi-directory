import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchExportConfigurationServerList = [
	"https://bulkexports.twilio.com",
] as const;


export class FetchExportConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ResourceType" })
  resourceType: string;
}


export class FetchExportConfigurationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchExportConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchExportConfigurationPathParams;

  @SpeakeasyMetadata()
  security: FetchExportConfigurationSecurity;
}


export class FetchExportConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  bulkexportsV1ExportConfiguration?: shared.BulkexportsV1ExportConfiguration;
}
