import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUsersIdInstitutionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostUsersIdInstitutionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency_code" })
  currencyCode: string;

  @Metadata({ data: "json, name=title" })
  title: string;
}


export class PostUsersIdInstitutionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUsersIdInstitutionsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostUsersIdInstitutionsRequestBody;
}


export class PostUsersIdInstitutionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  institution?: shared.Institution;

  @Metadata()
  statusCode: number;
}
