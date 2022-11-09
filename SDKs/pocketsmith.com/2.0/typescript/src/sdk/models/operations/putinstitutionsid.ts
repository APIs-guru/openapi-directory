import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutInstitutionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutInstitutionsIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class PutInstitutionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutInstitutionsIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutInstitutionsIdRequestBody;
}


export class PutInstitutionsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  institution?: shared.Institution;

  @Metadata()
  statusCode: number;
}
