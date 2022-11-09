import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContactModeratorsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class ContactModeratorsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=message" })
  message: string;

  @Metadata({ data: "multipart_form, name=subject" })
  subject: string;
}


export class ContactModeratorsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContactModeratorsPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: ContactModeratorsRequestBody;
}


export class ContactModeratorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
