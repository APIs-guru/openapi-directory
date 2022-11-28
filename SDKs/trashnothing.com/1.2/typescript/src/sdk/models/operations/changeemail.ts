import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChangeEmailRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=address" })
  address: string;
}


export class ChangeEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: ChangeEmailRequestBody;
}


export class ChangeEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
