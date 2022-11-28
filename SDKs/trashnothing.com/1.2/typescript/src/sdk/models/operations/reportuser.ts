import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReportUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=group_id" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=subject" })
  subject: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_email" })
  userEmail?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_id" })
  userId?: string;
}


export class ReportUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: ReportUserRequestBody;
}


export class ReportUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
