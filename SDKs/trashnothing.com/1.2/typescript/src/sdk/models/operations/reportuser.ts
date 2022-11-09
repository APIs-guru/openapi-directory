import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReportUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=group_id" })
  groupId?: string;

  @Metadata({ data: "multipart_form, name=message" })
  message: string;

  @Metadata({ data: "multipart_form, name=subject" })
  subject: string;

  @Metadata({ data: "multipart_form, name=user_email" })
  userEmail?: string;

  @Metadata({ data: "multipart_form, name=user_id" })
  userId?: string;
}


export class ReportUserRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: ReportUserRequestBody;
}


export class ReportUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
