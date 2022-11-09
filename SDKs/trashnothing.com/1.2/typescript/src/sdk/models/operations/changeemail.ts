import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChangeEmailRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=address" })
  address: string;
}


export class ChangeEmailRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: ChangeEmailRequestBody;
}


export class ChangeEmailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
