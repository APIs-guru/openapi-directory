import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHJOB_SERVERS = [
	"https://bulkexports.twilio.com",
];



export class FetchJobPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=JobSid" })
  jobSid: string;
}


export class FetchJobSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchJobRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchJobPathParams;

  @Metadata()
  security: FetchJobSecurity;
}


export class FetchJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  bulkexportsV1ExportJob?: shared.BulkexportsV1ExportJob;
}
