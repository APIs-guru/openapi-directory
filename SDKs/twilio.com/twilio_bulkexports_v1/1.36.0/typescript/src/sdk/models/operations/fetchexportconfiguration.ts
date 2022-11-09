import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHEXPORTCONFIGURATION_SERVERS = [
	"https://bulkexports.twilio.com",
];



export class FetchExportConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceType" })
  resourceType: string;
}


export class FetchExportConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchExportConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchExportConfigurationPathParams;

  @Metadata()
  security: FetchExportConfigurationSecurity;
}


export class FetchExportConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  bulkexportsV1ExportConfiguration?: shared.BulkexportsV1ExportConfiguration;
}
