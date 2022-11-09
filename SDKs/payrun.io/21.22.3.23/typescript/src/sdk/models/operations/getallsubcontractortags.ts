import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAllSubContractorTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class GetAllSubContractorTagsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetAllSubContractorTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllSubContractorTagsPathParams;

  @Metadata()
  headers: GetAllSubContractorTagsHeaders;
}


export class GetAllSubContractorTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  linkCollection?: shared.LinkCollection;

  @Metadata()
  statusCode: number;
}
