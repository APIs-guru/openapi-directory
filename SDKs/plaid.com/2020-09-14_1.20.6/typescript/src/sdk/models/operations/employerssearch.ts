import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EmployersSearchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EmployersSearchRequest;
}


export class EmployersSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  employersSearchResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
