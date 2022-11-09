import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInstitutionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetInstitutionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstitutionsIdPathParams;
}


export class GetInstitutionsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  institution?: shared.Institution;

  @Metadata()
  statusCode: number;
}
