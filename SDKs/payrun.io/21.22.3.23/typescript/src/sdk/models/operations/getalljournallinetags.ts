import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAllJournalLineTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class GetAllJournalLineTagsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetAllJournalLineTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllJournalLineTagsPathParams;

  @Metadata()
  headers: GetAllJournalLineTagsHeaders;
}


export class GetAllJournalLineTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  linkCollection?: shared.LinkCollection;

  @Metadata()
  statusCode: number;
}
